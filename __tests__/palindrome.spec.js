const palin = require("../lib/palindrome.js");

describe("sarah palin drome", () => {
  describe("when null argument", () => {
    test("should throw error", () => {
      expect(() => {
        palin();
      }).toThrowError(/must be defined/);
    });
  });

  describe("when no arguments", () => {
    test("should throw error", () => {
      expect(() => {
        palin();
      }).toThrowError(/must be defined/);
    });
  });

  describe("when non string argument", () => {
    test("should throw error", () => {
      expect(() => {
        palin({});
      }).toThrowError(/must be string/);
    });
  });

  describe("when non string argument", () => {
    test("should throw error", () => {
      expect(() => {
        palin(43);
      }).toThrowError(/must be string/);
    });
  });
  describe("when one word palindrome", () => {
    test("should return true", () => {
      expect(palin("racecar")).toEqual(true);
    });
  });

  describe("when one word non palindrome", () => {
    test("should return false", () => {
      expect(palin("raceca")).toEqual(false);
    });
  });

  describe("when palindrom wsith numbers", () => {
    test("should return false", () => {
      expect(palin("rac99car")).toEqual(true);
    });
  });

  describe("when spalindrome with spaces", () => {
    test("should return true", () => {
      expect(palin("race car")).toEqual(true);
    });
  });

  describe("when palindrome with puncuation", () => {
    test("should return true", () => {
      expect(palin("/r,a.c'eca\":;!?r")).toEqual(true);
    });
  });

  describe("when spalindrome with Capitals", () => {
    test("should return true", () => {
      expect(palin("rRAceCarr")).toEqual(true);
    });
  });

  describe("when palindrome with tabs", () => {
    test("should return true", () => {
      expect(palin("rac     e   car")).toEqual(true);
    });
  });

  describe("when palindrome with puncuation spaces and capitals", () => {
    test("should return true", () => {
      expect(palin("/r, a.C'ecA\":;! ? r")).toEqual(true);
    });
  });
});
