const frogJumps = require("../lib/frogJumps.js");

describe("Frogs a Jumpin", () => {
  describe("when start is equal to end", () => {
    test("should return 0", () => {
      const result = frogJumps(10, 10, 5);
      expect(result).toEqual(0);
    });
  });

  describe("basic test", () => {
    test("should return expected result", () => {
      const result = frogJumps(3, 10, 2);
      expect(result).toEqual(4);
    });
  });

  describe("when decimals are passed in", () => {
    test("should return an expected integer", () => {
      const result = frogJumps(3.5, 9.3, 2.9);
      expect(result).toEqual(2);
    });
  });

  describe("when negative start is passed in", () => {
    test("should return expected result", () => {
      const result = frogJumps(-5, 5, 4);
      expect(result).toEqual(3);
    });
  });

  describe("when negative start and end is passed in", () => {
    test("should return expected result", () => {
      const result = frogJumps(-7, -1, 1.5);
      expect(result).toEqual(4);
    });
  });

  describe("when string number is passed in", () => {
    test("should throw must be number error", () => {
      const result = () => {
        frogJumps("-6", -1, 1.5);
      };
      expect(result).toThrowError(/must be numbers/);
    });
  });

  describe("when string is passed in", () => {
    test("should throw must be number error", () => {
      const result = () => {
        frogJumps("g", -1, 1.5);
      };
      expect(result).toThrowError(/must be numbers/);
    });
  });

  describe("when object is passed in", () => {
    test("should throw must be number error", () => {
      const result = () => {
        frogJumps(5, {}, 1.5);
      };
      expect(result).toThrowError(/must be numbers/);
    });
  });

  describe("when array is passed in", () => {
    test("should throw must be number error", () => {
      const result = () => {
        frogJumps(5, 9, []);
      };
      expect(result).toThrowError(/must be numbers/);
    });
  });

  describe("when null is passed in", () => {
    test("should throw must be number error", () => {
      const result = () => {
        frogJumps(5, null, 1.5);
      };
      expect(result).toThrowError(/must be numbers/);
    });
  });

  describe("when start is greater than end", () => {
    test("should throw start must be greater than end error", () => {
      const result = () => {
        frogJumps(5, 1, 1.5);
      };
      expect(result).toThrowError(/the end must be greater than the start/);
    });
  });

  describe("when start is greater than end", () => {
    test("should throw start must be greater than end error", () => {
      const result = () => {
        frogJumps(5, 1, 1.5);
      };
      expect(result).toThrowError(/the end must be greater than the start/);
    });
  });
});
