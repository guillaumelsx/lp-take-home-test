import { Drug } from "./drug";
import { Dafalgan } from "./drugs/dafalgan";
import { Fervex } from "./drugs/fervex";
import { HerbalTea } from "./drugs/herbal_tea";
import { MagicPill } from "./drugs/magic_pill";

export const DRUGS = {
  HerbalTea: "Herbal Tea",
  Fervex: "Fervex",
  MagicPill: "Magic Pill",
  Dafalgan: "Dafalgan",
};

export class DrugFactory {
  static createDrug(name, expiresIn, benefit) {
    const drugClassMap = {
      [DRUGS.HerbalTea]: HerbalTea,
      [DRUGS.Fervex]: Fervex,
      [DRUGS.MagicPill]: MagicPill,
      [DRUGS.Dafalgan]: Dafalgan,
    };

    return drugClassMap[name]
      ? new drugClassMap[name](expiresIn, benefit)
      : new Drug(name, expiresIn, benefit);
  }
}
