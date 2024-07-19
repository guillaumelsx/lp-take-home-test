import { Drug } from "../drug";
import { DRUGS } from "../drug_factory";

export class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super(DRUGS.Dafalgan, expiresIn, benefit);
  }

  updateBenefitValue() {
    super.updateBenefitValue();
    super.updateBenefitValue();
  }
}
