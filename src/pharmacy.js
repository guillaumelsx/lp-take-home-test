import { DrugFactory } from "./drug_factory";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs.map(({ name, expiresIn, benefit }) =>
      DrugFactory.createDrug(name, expiresIn, benefit),
    );
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateExpirationValue();
      drug.updateBenefitValue();
    }

    return this.drugs;
  }
}
