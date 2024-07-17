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

      switch (drug.name) {
        case "Herbal Tea":
          if (drug.expiresIn < 0) {
            if (drug.benefit < 50) {
              drug.benefit += 2;
            }
          } else {
            if (drug.benefit < 50) {
              drug.benefit += 1;
            }
          }
          break;

        case "Fervex":
          if (drug.expiresIn < 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn < 5) {
            if (drug.benefit < 50) {
              drug.benefit += 3;
            }
          } else if (drug.expiresIn < 10) {
            if (drug.benefit < 50) {
              drug.benefit += 2;
            }
          } else {
            if (drug.benefit < 50) {
              drug.benefit += 1;
            }
          }
          break;

        default:
          if (drug.expiresIn < 0) {
            if (drug.benefit > 0) {
              drug.benefit -= 2;
            }
          } else {
            if (drug.benefit > 0) {
              drug.benefit -= 1;
            }
          }
          break;
      }
    }

    return this.drugs;
  }
}
