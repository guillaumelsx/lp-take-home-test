import { Drug, Pharmacy } from "../pharmacy";

describe("Pharmacy", () => {
  describe("Default Drug", () => {
    it("should decrease the benefit and expiresIn of a default drug", () => {
      const drugs = [new Drug("Default Drug", 10, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(9);
      expect(pharmacy.drugs[0].benefit).toBe(19);
    });

    it("should not decrease the benefit below 0 for default drugs", () => {
      const drugs = [new Drug("Default Drug", 10, 0)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(9);
      expect(pharmacy.drugs[0].benefit).toBe(0);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit of Herbal Tea before expiration", () => {
      const drugs = [new Drug("Herbal Tea", 10, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(9);
      expect(pharmacy.drugs[0].benefit).toBe(21);
    });

    it("should increase the benefit of Herbal Tea by 2 after expiration", () => {
      const drugs = [new Drug("Herbal Tea", 0, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(-1);
      expect(pharmacy.drugs[0].benefit).toBe(22);
    });

    it("should not increase the benefit of Herbal Tea beyond 50", () => {
      const drugs = [new Drug("Herbal Tea", 10, 50)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(9);
      expect(pharmacy.drugs[0].benefit).toBe(50);
    });
  });

  describe("Fervex", () => {
    it("should drop the benefit of Fervex to 0 after expiration", () => {
      const drugs = [new Drug("Fervex", 0, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(-1);
      expect(pharmacy.drugs[0].benefit).toBe(0);
    });

    it("should increase the benefit of Fervex by 3 when 5 days or less to expiration", () => {
      const drugs = [new Drug("Fervex", 5, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(4);
      expect(pharmacy.drugs[0].benefit).toBe(23);
    });

    it("should increase the benefit of Fervex by 2 when 10 days or less to expiration", () => {
      const drugs = [new Drug("Fervex", 10, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(9);
      expect(pharmacy.drugs[0].benefit).toBe(22);
    });
  });

  describe("Magic Pill", () => {
    it("should not change the benefit of Magic Pill", () => {
      const drugs = [new Drug("Magic Pill", 10, 20)];
      const pharmacy = new Pharmacy(drugs);

      pharmacy.updateBenefitValue();

      expect(pharmacy.drugs[0].expiresIn).toBe(10);
      expect(pharmacy.drugs[0].benefit).toBe(20);
    });
  });
});
