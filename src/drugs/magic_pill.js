import { Drug } from "../drug";
import { DRUGS } from "../drug_factory";

export class MagicPill extends Drug {
  constructor(expiresIn, benefit) {
    super(DRUGS.MagicPill, expiresIn, benefit);
  }

  updateExpirationValue() {}

  updateBenefitValue() {}
}
