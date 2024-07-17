const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      if (drug.name === "Magic Pill") continue;

      drug.expiresIn--;
      this.updateDrug(drug);
    }

    return this.drugs;
  }

  updateDrug(drug) {
    const updateStrategies = {
      "Herbal Tea": this.updateHerbalTea,
      Fervex: this.updateFervex,
      Dafalgan: this.updateDafalgan,
      default: this.updateDefaultDrug,
    };

    const updateStrategy =
      updateStrategies[drug.name] || updateStrategies["default"];
    updateStrategy.call(this, drug);
  }

  updateHerbalTea(drug) {
    drug.benefit =
      drug.expiresIn < 0
        ? Math.min(MAX_BENEFIT, drug.benefit + 2)
        : Math.min(MAX_BENEFIT, drug.benefit + 1);
  }

  updateFervex(drug) {
    if (drug.expiresIn < 0) {
      drug.benefit = 0;
    } else if (drug.expiresIn < 5) {
      drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + 3);
    } else if (drug.expiresIn < 10) {
      drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + 2);
    } else {
      drug.benefit = Math.min(MAX_BENEFIT, drug.benefit + 1);
    }
  }

  updateDafalgan(drug) {
    drug.benefit =
      drug.expiresIn < 0
        ? Math.max(MIN_BENEFIT, drug.benefit - 4)
        : Math.max(MIN_BENEFIT, drug.benefit - 2);
  }

  updateDefaultDrug(drug) {
    drug.benefit =
      drug.expiresIn < 0
        ? Math.max(MIN_BENEFIT, drug.benefit - 2)
        : Math.max(MIN_BENEFIT, drug.benefit - 1);
  }
}
