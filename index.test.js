const getRandomNumber = require("./index.js");
test("it should return an integer", () => {
  const randomNumber = getRandomNumber();
  expect(Number.isInteger(randomNumber)).toBe(true);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
  expect(randomNumber).toBeLessThanOrEqual(100);
});
