import { AttachPosition } from '../types';
import { Vector3, WeaponHash } from 'fivem-js';

const attachPositions = new Map<WeaponHash, AttachPosition>([
  // melee
  [WeaponHash.Dagger, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Bat, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Bottle, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Crowbar, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Unarmed, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Flashlight, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.GolfClub, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Hammer, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Hatchet, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.KnuckleDuster, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Knife, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Machete, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.SwitchBlade, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Nightstick, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Wrench, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.BattleAxe, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.PoolCue, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.StoneHatchet, new Vector3(-0.1, 0.05, -0.12)],

  // handguns
  [WeaponHash.Pistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.PistolMk2, new Vector3(0, 0, 0.21)],
  [WeaponHash.CombatPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.APPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.StunGun, new Vector3(0, 0, 0.21)],
  [WeaponHash.Pistol50, new Vector3(0, 0, 0.21)],
  [WeaponHash.SNSPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.SNSPistolMk2, new Vector3(0, 0, 0.21)],
  [WeaponHash.HeavyPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.VintagePistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.FlareGun, new Vector3(0, 0, 0.21)],
  [WeaponHash.MarksmanPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.Revolver, new Vector3(0, 0, 0.21)],
  [WeaponHash.RevolverMk2, new Vector3(0, 0, 0.21)],
  [WeaponHash.DoubleAction, new Vector3(0, 0, 0.21)],
  [WeaponHash.RayPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.CeramicPistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.NavyRevolver, new Vector3(0, 0, 0.21)],
  [WeaponHash.GadgetPistol, new Vector3(0, 0, 0.21)],

  // sub-machine guns
  [WeaponHash.MicroSMG, new Vector3(0, 0, 0.21)],
  [WeaponHash.SMG, new Vector3(0, 0, 0.21)],
  [WeaponHash.SMGMk2, new Vector3(0, 0, 0.21)],
  [WeaponHash.AssaultSMG, new Vector3(0, 0, 0.21)],
  [WeaponHash.CombatPDW, new Vector3(0, 0, 0.21)],
  [WeaponHash.MachinePistol, new Vector3(0, 0, 0.21)],
  [WeaponHash.MiniSMG, new Vector3(0, 0, 0.21)],
  [WeaponHash.RayCarbine, new Vector3(0, 0, 0.21)],

  // shotguns
  [WeaponHash.PumpShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.PumpShotgunMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.SawnOffShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.AssaultShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.BullpupShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Musket, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.HeavyShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.DoubleBarrelShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.SweeperShotgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CombatShotgun, new Vector3(0.2, -0.12, -0.08)],

  // Assault Rifles
  [WeaponHash.AssaultRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.AssaultRifleMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CarbineRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CarbineRifleMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.AdvancedRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.SpecialCarbine, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.SpecialCarbineMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.BullpupRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.BullpupRifleMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CompactRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.MilitaryRifle, new Vector3(0.2, -0.12, -0.08)],

  // Light Machine Guns
  [WeaponHash.MG, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CombatMG, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CombatMGMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Gusenberg, new Vector3(0.2, -0.12, -0.08)],

  // Sniper Rifles
  [WeaponHash.SniperRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.HeavySniper, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.HeavySniperMk2, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.MarksmanRifle, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.MarksmanRifleMk2, new Vector3(0.2, -0.12, -0.08)],

  // Heavy Weapons
  [WeaponHash.RPG, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.GrenadeLauncher, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.GrenadeLauncherSmoke, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Minigun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Firework, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Railgun, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.HomingLauncher, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.CompactGrenadeLauncher, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.RayMinigun, new Vector3(0.2, -0.12, -0.08)],

  // Throwables
  [WeaponHash.Grenade, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.BZGas, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Molotov, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.StickyBomb, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.ProximityMine, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Snowball, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.PipeBomb, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Ball, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.SmokeGrenade, new Vector3(-0.1, 0.05, -0.12)],
  [WeaponHash.Flare, new Vector3(-0.1, 0.05, -0.12)],

  // Miscellaneous
  [WeaponHash.PetrolCan, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.Parachute, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.FireExtinguisher, new Vector3(0.2, -0.12, -0.08)],
  [WeaponHash.HazardCan, new Vector3(0.2, -0.12, -0.08)],
]);

export class AttachPositionByWeapon {
  public get(hash: WeaponHash): AttachPosition {
    return attachPositions.get(hash >>> 0) ?? new Vector3(0, 0, 0);
  }
}
