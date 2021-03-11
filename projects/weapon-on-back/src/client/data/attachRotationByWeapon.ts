import { Vector3, WeaponHash } from 'fivem-js';
import { AttachRotation } from '../types';

const attachRotations = new Map<WeaponHash, AttachRotation>([
  // melee
  [WeaponHash.Dagger, new Vector3(90, 90, 0)],
  [WeaponHash.Bat, new Vector3(90, 90, 0)],
  [WeaponHash.Bottle, new Vector3(90, 90, 0)],
  [WeaponHash.Crowbar, new Vector3(90, 90, 0)],
  [WeaponHash.Unarmed, new Vector3(0, 0, 0)],
  [WeaponHash.Flashlight, new Vector3(90, 90, 0)],
  [WeaponHash.GolfClub, new Vector3(90, 90, 0)],
  [WeaponHash.Hammer, new Vector3(90, 90, 0)],
  [WeaponHash.Hatchet, new Vector3(90, 90, 0)],
  [WeaponHash.KnuckleDuster, new Vector3(90, 90, 0)],
  [WeaponHash.Knife, new Vector3(90, 90, 0)],
  [WeaponHash.Machete, new Vector3(90, 90, 0)],
  [WeaponHash.SwitchBlade, new Vector3(90, 90, 0)],
  [WeaponHash.Nightstick, new Vector3(90, 90, 0)],
  [WeaponHash.Wrench, new Vector3(90, 90, 0)],
  [WeaponHash.BattleAxe, new Vector3(90, 90, 0)],
  [WeaponHash.PoolCue, new Vector3(90, 90, 0)],
  [WeaponHash.StoneHatchet, new Vector3(90, 90, 0)],

  // handguns
  [WeaponHash.Pistol, new Vector3(270, 0, 0)],
  [WeaponHash.PistolMk2, new Vector3(270, 0, 0)],
  [WeaponHash.CombatPistol, new Vector3(270, 0, 0)],
  [WeaponHash.APPistol, new Vector3(270, 0, 0)],
  [WeaponHash.StunGun, new Vector3(270, 0, 0)],
  [WeaponHash.Pistol50, new Vector3(270, 0, 0)],
  [WeaponHash.SNSPistol, new Vector3(270, 0, 0)],
  [WeaponHash.SNSPistolMk2, new Vector3(270, 0, 0)],
  [WeaponHash.HeavyPistol, new Vector3(270, 0, 0)],
  [WeaponHash.VintagePistol, new Vector3(270, 0, 0)],
  [WeaponHash.FlareGun, new Vector3(270, 0, 0)],
  [WeaponHash.MarksmanPistol, new Vector3(270, 0, 0)],
  [WeaponHash.Revolver, new Vector3(270, 0, 0)],
  [WeaponHash.RevolverMk2, new Vector3(270, 0, 0)],
  [WeaponHash.DoubleAction, new Vector3(270, 0, 0)],
  [WeaponHash.RayPistol, new Vector3(270, 0, 0)],
  [WeaponHash.CeramicPistol, new Vector3(270, 0, 0)],
  [WeaponHash.NavyRevolver, new Vector3(270, 0, 0)],
  [WeaponHash.GadgetPistol, new Vector3(270, 0, 0)],

  // sub-machine guns
  [WeaponHash.MicroSMG, new Vector3(270, 0, 0)],
  [WeaponHash.SMG, new Vector3(270, 0, 0)],
  [WeaponHash.SMGMk2, new Vector3(270, 0, 0)],
  [WeaponHash.AssaultSMG, new Vector3(270, 0, 0)],
  [WeaponHash.CombatPDW, new Vector3(270, 0, 0)],
  [WeaponHash.MachinePistol, new Vector3(270, 0, 0)],
  [WeaponHash.MiniSMG, new Vector3(270, 0, 0)],
  [WeaponHash.RayCarbine, new Vector3(270, 0, 0)],

  // shotguns
  [WeaponHash.PumpShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.PumpShotgunMk2, new Vector3(0, -20, 180)],
  [WeaponHash.SawnOffShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.AssaultShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.BullpupShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.Musket, new Vector3(0, -20, 180)],
  [WeaponHash.HeavyShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.DoubleBarrelShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.SweeperShotgun, new Vector3(0, -20, 180)],
  [WeaponHash.CombatShotgun, new Vector3(0, -20, 180)],

  // Assault Rifles
  [WeaponHash.AssaultRifle, new Vector3(0, -20, 180)],
  [WeaponHash.AssaultRifleMk2, new Vector3(0, -20, 180)],
  [WeaponHash.CarbineRifle, new Vector3(0, -20, 180)],
  [WeaponHash.CarbineRifleMk2, new Vector3(0, -20, 180)],
  [WeaponHash.AdvancedRifle, new Vector3(0, -20, 180)],
  [WeaponHash.SpecialCarbine, new Vector3(0, -20, 180)],
  [WeaponHash.SpecialCarbineMk2, new Vector3(0, -20, 180)],
  [WeaponHash.BullpupRifle, new Vector3(0, -20, 180)],
  [WeaponHash.BullpupRifleMk2, new Vector3(0, -20, 180)],
  [WeaponHash.CompactRifle, new Vector3(0, -20, 180)],
  [WeaponHash.MilitaryRifle, new Vector3(0, -20, 180)],

  // Light Machine Guns
  [WeaponHash.MG, new Vector3(0, -20, 180)],
  [WeaponHash.CombatMG, new Vector3(0, -20, 180)],
  [WeaponHash.CombatMGMk2, new Vector3(0, -20, 180)],
  [WeaponHash.Gusenberg, new Vector3(0, -20, 180)],

  // Sniper Rifles
  [WeaponHash.SniperRifle, new Vector3(0, -20, 180)],
  [WeaponHash.HeavySniper, new Vector3(0, -20, 180)],
  [WeaponHash.HeavySniperMk2, new Vector3(0, -20, 180)],
  [WeaponHash.MarksmanRifle, new Vector3(0, -20, 180)],
  [WeaponHash.MarksmanRifleMk2, new Vector3(0, -20, 180)],

  // Heavy Weapons
  [WeaponHash.RPG, new Vector3(0, -20, 180)],
  [WeaponHash.GrenadeLauncher, new Vector3(0, -20, 180)],
  [WeaponHash.GrenadeLauncherSmoke, new Vector3(0, -20, 180)],
  [WeaponHash.Minigun, new Vector3(0, -20, 180)],
  [WeaponHash.Firework, new Vector3(0, -20, 180)],
  [WeaponHash.Railgun, new Vector3(0, -20, 180)],
  [WeaponHash.HomingLauncher, new Vector3(0, -20, 180)],
  [WeaponHash.CompactGrenadeLauncher, new Vector3(0, -20, 180)],
  [WeaponHash.RayMinigun, new Vector3(0, -20, 180)],

  // Throwables
  [WeaponHash.Grenade, new Vector3(0, 270, 0)],
  [WeaponHash.BZGas, new Vector3(0, 270, 0)],
  [WeaponHash.Molotov, new Vector3(0, 270, 0)],
  [WeaponHash.StickyBomb, new Vector3(0, 270, 0)],
  [WeaponHash.ProximityMine, new Vector3(0, 270, 0)],
  [WeaponHash.Snowball, new Vector3(0, 270, 0)],
  [WeaponHash.PipeBomb, new Vector3(0, 270, 0)],
  [WeaponHash.Ball, new Vector3(0, 270, 0)],
  [WeaponHash.SmokeGrenade, new Vector3(0, 270, 0)],
  [WeaponHash.Flare, new Vector3(0, 270, 0)],

  // Miscellaneous
  [WeaponHash.PetrolCan, new Vector3(0, -20, 180)],
  [WeaponHash.Parachute, new Vector3(0, -20, 180)],
  [WeaponHash.FireExtinguisher, new Vector3(0, -20, 180)],
  [WeaponHash.HazardCan, new Vector3(0, -20, 180)],
]);

export class AttachRotationByWeapon {
  public get(hash: WeaponHash): AttachRotation {
    return attachRotations.get(hash >>> 0) ?? new Vector3(0, 0, 0);
  }
}
