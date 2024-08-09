export enum Stat {
  /** Hit Points */
  HP = 0,
  /** Attack */
  ATK = 1,
  /** Defense */
  DEF = 2,
  /** Special Attack */
  SPATK = 3,
  /** Special Defense */
  SPDEF = 4,
  /** Speed */
  SPD = 5,
  /** Accuracy */
  ACC = 6,
  /** Evasiveness */
  EVA = 7
}

export type PermanentStat = Exclude<Stat, Stat.ACC | Stat.EVA>;

export type BattleStat = Exclude<Stat, Stat.HP>;

export type TempBattleStat = Exclude<BattleStat, Stat.EVA>;
