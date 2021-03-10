import {WeaponHash} from 'fivem-js';
import {AttachPoint} from '../types';

const attachPoints = new Map<WeaponHash, AttachPoint>([
    // melee
    [WeaponHash.Dagger, AttachPoint.Left],
    [WeaponHash.Bat, AttachPoint.Left],
    [WeaponHash.Bottle, AttachPoint.Left],
    [WeaponHash.Crowbar, AttachPoint.Left],
    [WeaponHash.Unarmed, AttachPoint.Invalid],
    [WeaponHash.Flashlight, AttachPoint.Left],
    [WeaponHash.GolfClub, AttachPoint.Left],
    [WeaponHash.Hammer, AttachPoint.Left],
    [WeaponHash.Hatchet, AttachPoint.Left],
    [WeaponHash.KnuckleDuster, AttachPoint.Left],
    [WeaponHash.Knife, AttachPoint.Left],
    [WeaponHash.Machete, AttachPoint.Left],
    [WeaponHash.SwitchBlade, AttachPoint.Left],
    [WeaponHash.Nightstick, AttachPoint.Left],
    [WeaponHash.Wrench, AttachPoint.Left],
    [WeaponHash.BattleAxe, AttachPoint.Left],
    [WeaponHash.PoolCue, AttachPoint.Left],
    [WeaponHash.StoneHatchet, AttachPoint.Left],

    // handguns
    [WeaponHash.Pistol, AttachPoint.Right],
    [WeaponHash.PistolMk2, AttachPoint.Right],
    [WeaponHash.CombatPistol, AttachPoint.Right],
    [WeaponHash.APPistol, AttachPoint.Right],
    [WeaponHash.StunGun, AttachPoint.Right],
    [WeaponHash.Pistol50, AttachPoint.Right],
    [WeaponHash.SNSPistol, AttachPoint.Right],
    [WeaponHash.SNSPistolMk2, AttachPoint.Right],
    [WeaponHash.HeavyPistol, AttachPoint.Right],
    [WeaponHash.VintagePistol, AttachPoint.Right],
    [WeaponHash.FlareGun, AttachPoint.Right],
    [WeaponHash.MarksmanPistol, AttachPoint.Right],
    [WeaponHash.Revolver, AttachPoint.Right],
    [WeaponHash.RevolverMk2, AttachPoint.Right],
    [WeaponHash.DoubleAction, AttachPoint.Right],
    [WeaponHash.RayPistol, AttachPoint.Right],
    [WeaponHash.CeramicPistol, AttachPoint.Right],
    [WeaponHash.NavyRevolver, AttachPoint.Right],
    [WeaponHash.GadgetPistol, AttachPoint.Right],

    // sub-machine guns
    [WeaponHash.MicroSMG, AttachPoint.Right],
    [WeaponHash.SMG, AttachPoint.Right],
    [WeaponHash.SMGMk2, AttachPoint.Right],
    [WeaponHash.AssaultSMG, AttachPoint.Right],
    [WeaponHash.CombatPDW, AttachPoint.Right],
    [WeaponHash.MachinePistol, AttachPoint.Right],
    [WeaponHash.MiniSMG, AttachPoint.Right],
    [WeaponHash.RayCarbine, AttachPoint.Right],

    // shotguns
    [WeaponHash.PumpShotgun, AttachPoint.Spine],
    [WeaponHash.PumpShotgunMk2, AttachPoint.Spine],
    [WeaponHash.SawnOffShotgun, AttachPoint.Spine],
    [WeaponHash.AssaultShotgun, AttachPoint.Spine],
    [WeaponHash.BullpupShotgun, AttachPoint.Spine],
    [WeaponHash.Musket, AttachPoint.Spine],
    [WeaponHash.HeavyShotgun, AttachPoint.Spine],
    [WeaponHash.DoubleBarrelShotgun, AttachPoint.Spine],
    [WeaponHash.SweeperShotgun, AttachPoint.Spine],
    [WeaponHash.CombatShotgun, AttachPoint.Spine],

    // Assault Rifles
    [WeaponHash.AssaultRifle, AttachPoint.Spine],
    [WeaponHash.AssaultRifleMk2, AttachPoint.Spine],
    [WeaponHash.CarbineRifle, AttachPoint.Spine],
    [WeaponHash.CarbineRifleMk2, AttachPoint.Spine],
    [WeaponHash.AdvancedRifle, AttachPoint.Spine],
    [WeaponHash.SpecialCarbine, AttachPoint.Spine],
    [WeaponHash.SpecialCarbineMk2, AttachPoint.Spine],
    [WeaponHash.BullpupRifle, AttachPoint.Spine],
    [WeaponHash.BullpupRifleMk2, AttachPoint.Spine],
    [WeaponHash.CompactRifle, AttachPoint.Spine],
    [WeaponHash.MilitaryRifle, AttachPoint.Spine],

    // Light Machine Guns
    [WeaponHash.MG, AttachPoint.Spine],
    [WeaponHash.CombatMG, AttachPoint.Spine],
    [WeaponHash.CombatMGMk2, AttachPoint.Spine],
    [WeaponHash.Gusenberg, AttachPoint.Spine],

    // Sniper Rifles
    [WeaponHash.SniperRifle, AttachPoint.Spine],
    [WeaponHash.HeavySniper, AttachPoint.Spine],
    [WeaponHash.HeavySniperMk2, AttachPoint.Spine],
    [WeaponHash.MarksmanRifle, AttachPoint.Spine],
    [WeaponHash.MarksmanRifleMk2, AttachPoint.Spine],

    // Heavy Weapons
    [WeaponHash.RPG, AttachPoint.Spine],
    [WeaponHash.GrenadeLauncher, AttachPoint.Spine],
    [WeaponHash.GrenadeLauncherSmoke, AttachPoint.Spine],
    [WeaponHash.Minigun, AttachPoint.Spine],
    [WeaponHash.Firework, AttachPoint.Spine],
    [WeaponHash.Railgun, AttachPoint.Spine],
    [WeaponHash.HomingLauncher, AttachPoint.Spine],
    [WeaponHash.CompactGrenadeLauncher, AttachPoint.Spine],
    [WeaponHash.RayMinigun, AttachPoint.Spine],

    // Throwables
    [WeaponHash.Grenade, AttachPoint.Left],
    [WeaponHash.BZGas, AttachPoint.Left],
    [WeaponHash.Molotov, AttachPoint.Left],
    [WeaponHash.StickyBomb, AttachPoint.Left],
    [WeaponHash.ProximityMine, AttachPoint.Left],
    [WeaponHash.Snowball, AttachPoint.Left],
    [WeaponHash.PipeBomb, AttachPoint.Left],
    [WeaponHash.Ball, AttachPoint.Left],
    [WeaponHash.SmokeGrenade, AttachPoint.Left],
    [WeaponHash.Flare, AttachPoint.Left],

    // Miscellaneous
    [WeaponHash.PetrolCan, AttachPoint.Spine],
    [WeaponHash.Parachute, AttachPoint.Spine],
    [WeaponHash.FireExtinguisher, AttachPoint.Spine],
    [WeaponHash.HazardCan, AttachPoint.Spine],
]);

export class AttachPointByWeapon {
    public get(hash: WeaponHash): AttachPoint {
        return attachPoints.get(hash >>> 0) ?? AttachPoint.Invalid;
    }
}
