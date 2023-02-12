import { getRandomEyeColor } from "../getRandomEyeColor";

describe("getRandomEyeColor", () => {
  it("should return a random eye color from the list", () => {
    const eyeColor = getRandomEyeColor();
    expect(["brown", "green", "blue", "hazel"]).toContain(eyeColor);
  });
});
