import calculDistance from "./calculDistance";

describe("Calcul distante tests", () => {
    test("Same coordinate", () => {
      expect(0).toBe(calculDistance(
        {lat : 1, lng : 1},
        {lat : 1, lng : 1}));
    });

    test("1km", () => {
        expect(222.3898532891174).toBe(calculDistance(
          {lat : 1, lng : 1},
          {lat : 3, lng : 1}));
      });
});