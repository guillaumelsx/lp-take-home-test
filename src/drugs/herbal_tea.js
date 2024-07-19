import { Drug } from "../drug";
import { DRUGS } from "../drug_factory";

export class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super(DRUGS.HerbalTea, expiresIn, benefit);
  }

  updateBenefitValue() {
    this.benefit = this.isExpired
      ? this.increaseBenefit(this.benefit, 2)
      : this.increaseBenefit(this.benefit, 1);
  }
}
