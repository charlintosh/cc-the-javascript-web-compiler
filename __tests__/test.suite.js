const isCodeGood = require("../excercise");

describe("Code Challenge: Balance Brackets", () => {
  it("function should be defined", () => {
    expect(isCodeGood).toBeDefined();
  });

  it("should return true for empty string", () => {
    expect(isCodeGood("")).toBe(true);
  });

  it("should return true for code in good shape", () => {
    expect(isCodeGood("({[]})")).toBe(true);
    expect(isCodeGood("()")).toBe(true);
    expect(isCodeGood("[]")).toBe(true);
    expect(isCodeGood("{}")).toBe(true);
    expect(isCodeGood("{()}")).toBe(true);
  });

  it("should return false for code non good code", () => {
    expect(isCodeGood("(")).toBe(false);
    expect(isCodeGood(")")).toBe(false);
    expect(isCodeGood("({[})")).toBe(false);
    expect(isCodeGood("(})")).toBe(false);
    expect(isCodeGood("({)}[]")).toBe(false);
    expect(isCodeGood("{{")).toBe(false);
  });
});
