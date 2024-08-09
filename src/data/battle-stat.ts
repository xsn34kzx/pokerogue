import i18next, { ParseKeys } from "i18next";

export enum BattleStat {
  ATK,
  DEF,
  SPATK,
  SPDEF,
  SPD,
  ACC,
  EVA,
  RAND
}


// TODO: change this to inbattlestat obv
// think about using a record to store temp pair
export function getBattleStatName(stat: BattleStat) {
  switch (stat) {
  case BattleStat.ATK:
    return i18next.t("pokemonInfo:Stat.ATK");
  case BattleStat.DEF:
    return i18next.t("pokemonInfo:Stat.DEF");
  case BattleStat.SPATK:
    return i18next.t("pokemonInfo:Stat.SPATK");
  case BattleStat.SPDEF:
    return i18next.t("pokemonInfo:Stat.SPDEF");
  case BattleStat.SPD:
    return i18next.t("pokemonInfo:Stat.SPD");
  case BattleStat.ACC:
    return i18next.t("pokemonInfo:Stat.ACC");
  case BattleStat.EVA:
    return i18next.t("pokemonInfo:Stat.EVA");
  default:
    return "???";
  }
}

// TODO: Remove this i18next call, move it to the outside
export function getBattleStatStageChangeDescription(pokemonNameWithAffix: string, stats: string, stages: number, isIncrease: boolean, count: number = 1) {
  let key: string;
  if (stages === 1) {
    key = isIncrease ? "battle:statRose" : "battle:statFell";
  } else if (stages === 2) {
    key = isIncrease ? "battle:statSharplyRose" : "battle:statHarshlyFell";
  } else if (stages <= 6) {
    key = isIncrease ? "battle:statRoseDrastically" : "battle:statSeverelyFell";
  } else {
    key = isIncrease ? "battle:statWontGoAnyHigher" : "battle:statWontGoAnyLower";
  }

  return i18next.t(key as ParseKeys, { pokemonNameWithAffix, stats, count });
}
