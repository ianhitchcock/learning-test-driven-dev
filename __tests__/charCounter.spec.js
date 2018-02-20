const charCounter = require("../lib/charCounter.js");

describe("chars a Countin'", () => {
  describe("when null argument", () => {
    test("should throw error", () => {
      expect(() => {
        charCounter();
      }).toThrowError(/null/);
    });
  });

  describe("when non string argument", () => {
    test("should throw error", () => {
      expect(() => {
        charCounter({});
      }).toThrowError(/string/);
    });
  });

  describe("when empty string argument", () => {
    test("should throw error", () => {
      expect(() => {
        charCounter("");
      }).toThrowError(/defined/);
    });
  });

  describe("when valid argument", () => {
    test("should return valid result", () => {
      expect(charCounter("1113333333")).toEqual("1337");
    });
  });

  describe("when special character", () => {
    test("should return valid result", () => {
      expect(charCounter("1113333333\n\n\n")).toEqual("1337:newline:3");
    });
  });
});
