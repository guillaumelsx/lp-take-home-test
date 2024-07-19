const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;
const DEFAULT_BENEFIT_DECREASE = 1;
const EXPIRED_BENEFIT_DECREASE = 2;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit(benefit, value) {
    return Math.max(MIN_BENEFIT, benefit - value);
  }

  increaseBenefit(benefit, value) {
    return Math.min(MAX_BENEFIT, benefit + value);
  }

  get isExpired() {
    return this.expiresIn < 0;
  }

  updateExpirationValue() {
    this.expiresIn--;
  }

  updateBenefitValue() {
    this.benefit = this.isExpired
      ? this.decreaseBenefit(this.benefit, EXPIRED_BENEFIT_DECREASE)
      : this.decreaseBenefit(this.benefit, DEFAULT_BENEFIT_DECREASE);
  }
}
