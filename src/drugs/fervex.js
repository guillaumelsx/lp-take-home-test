import { Drug } from "../drug";
import { DRUGS } from "../drug_factory";

export class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super(DRUGS.Fervex, expiresIn, benefit);
  }

  updateBenefitValue() {
    if (this.isExpired) {
      this.benefit = 0;
    } else if (this.expiresIn < 5) {
      this.benefit = this.increaseBenefit(this.benefit, 3);
    } else if (this.expiresIn < 10) {
      this.benefit = this.increaseBenefit(this.benefit, 2);
    } else {
      this.benefit = this.increaseBenefit(this.benefit, 1);
    }
  }
}
