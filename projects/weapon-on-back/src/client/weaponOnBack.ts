import {WeaponHash} from 'fivem-js';
import {AttachPointByWeapon} from './data';
import {ActionSet, ActionType, AttachPoint, PedHandle, WeaponHandle} from './types';
import {AttachDetailCollection} from './attachDetailCollection';
import {ActionParser} from './actionParser';
import {SnapshotAttachDetailCollection} from './snapshotAttachDetailCollection';
import {deleteEntity, requestWeaponAsset} from './utils';
import {WeaponByAttachPointByPed} from './weaponByAttachPointByPed';

export class WeaponOnBack {
    private prevWeapon: WeaponHash = WeaponHash.Unarmed;

    private readonly attachPointByWeapon = new AttachPointByWeapon();

    private readonly attachDetailCollection = new AttachDetailCollection();

    private readonly snapshotAttachDetailCollection = new SnapshotAttachDetailCollection();

    private readonly weaponByAttachPointByPed = new WeaponByAttachPointByPed();

    /**
     * Player weapon change detection
     *
     */
    async detectThisPlayerWeaponChangeAsync(): Promise<void> {
        const ped: PedHandle = GetPlayerPed(-1);

        const prevWeapon = this.prevWeapon;
        const currWeapon = GetSelectedPedWeapon(ped) >>> 0;

        // same weapon = no switch
        if (prevWeapon === currWeapon) {
            this.prevWeapon = currWeapon;
            return;
        }

        const prevAttachPoint = this.attachPointByWeapon.get(prevWeapon);
        const currAttachPoint = this.attachPointByWeapon.get(currWeapon);

        // Invalid attachPoint = no switch
        if (prevAttachPoint === AttachPoint.Invalid) {
            this.prevWeapon = currWeapon;
            return;
        }

        // 1. currentAttachPoint is Invalid -> just switch weapon
        // 2. switch weapon if same attachPoint
        // 3. otherwise, set current to unarmed, switch previous
        if (currAttachPoint === AttachPoint.Invalid) {
            this.attachDetailCollection.set(ped, prevAttachPoint, prevWeapon);
        } else if (prevAttachPoint === currAttachPoint) {
            this.attachDetailCollection.set(ped, prevAttachPoint, prevWeapon);
        } else {
            const attachDetail = this.attachDetailCollection.get(ped, currAttachPoint);

            // remove if same
            if (attachDetail.weaponHash === currWeapon) {
                this.attachDetailCollection.set(ped, currAttachPoint, WeaponHash.Unarmed);
            }

            this.attachDetailCollection.set(ped, prevAttachPoint, prevWeapon);
        }

        this.prevWeapon = currWeapon ?? WeaponHash.Unarmed;
    }

    async updateGameplayAsync(): Promise<void> {
        const ped: PedHandle = GetPlayerPed(-1);

        const snapshotAttachDetails = this.snapshotAttachDetailCollection.get(ped);
        const newestAttachDetails = this.attachDetailCollection.getAll(ped);

        const parser = new ActionParser(snapshotAttachDetails);
        const actionSets = parser.parse(newestAttachDetails);

        this.snapshotAttachDetailCollection.set(ped, newestAttachDetails);

        // for (const actionSet of actionSets) {
        //     console.log(
        //         'actionSet',
        //         ActionType[actionSet.actionType],
        //         AttachPoint[actionSet.attachDetail.attachPoint],
        //         WeaponHash[actionSet.attachDetail.weaponHash]);
        // }

        for (const actionSet of actionSets) {
            await this.updateGameByActionSet(ped, actionSet);
        }
    }

    cleanup(): void {
        this.weaponByAttachPointByPed.cleanup();
    }

    private async updateGameByActionSet(ped: PedHandle, actionSet: ActionSet): Promise<void> {
        const {attachPoint} = actionSet.attachDetail;

        const weapon = this.weaponByAttachPointByPed.get(ped, attachPoint);

        switch (actionSet.actionType) {
            case ActionType.create:
            case ActionType.update:
                if (weapon) {
                    deleteEntity(weapon);
                    this.weaponByAttachPointByPed.delete(ped, attachPoint);
                }

                const newWeapon = await WeaponOnBack.createAndAttachWeaponByActionSet(ped, actionSet);

                if (newWeapon) {
                    this.weaponByAttachPointByPed.set(ped, attachPoint, newWeapon);
                }

                break;
            case ActionType.remove:
                if (weapon) {
                    deleteEntity(weapon);
                    this.weaponByAttachPointByPed.delete(ped, attachPoint);
                }

                break;
            default:
                break;
        }
    }

    private static async createAndAttachWeaponByActionSet(ped: PedHandle, actionSet: ActionSet): Promise<WeaponHandle | undefined> {
        const {
            // attachPoint,
            weaponHash,
            attachBone,
            attachPosition,
            attachRotation,
            weaponComponents,
            weaponTint
        } = actionSet.attachDetail;

        const isWeaponAssetLoaded = await requestWeaponAsset(weaponHash, 1000, 5);

        if (!isWeaponAssetLoaded) {
            return;
        }

        const [x, y, z] = GetEntityCoords(ped, false);

        const weaponHandle = CreateWeaponObject(
            weaponHash, 1, x, y, z - 10, true, 1.0, 0);

        for (const weaponComponent of weaponComponents) {
            GiveWeaponComponentToWeaponObject(weaponHandle, weaponComponent)
        }

        SetWeaponObjectTintIndex(weaponHandle, weaponTint);

        const boneIndex = GetPedBoneIndex(ped, attachBone);

        AttachEntityToEntity(
            weaponHandle,
            ped,
            boneIndex,
            attachPosition.x,
            attachPosition.y,
            attachPosition.z,
            attachRotation.x,
            attachRotation.y,
            attachRotation.z,
            false,
            false,
            false,
            true,
            2,
            true);

        return weaponHandle;
    }
}
