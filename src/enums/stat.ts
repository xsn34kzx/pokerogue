export enum Stat {
  /** Hit Points */
  HP = 0,
  /** Attack */
  ATK,
  /** Defense */
  DEF,
  /** Special Attack */
  SPATK,
  /** Special Defense */
  SPDEF,
  /** Speed */
  SPD,
  /** Accuracy */
  ACC,
  /** Evasiveness */
  EVA
}

export type PermanentStat = Exclude<Stat, Stat.ACC | Stat.EVA >;

export type InBattleStat = Exclude<Stat, Stat.HP>;
