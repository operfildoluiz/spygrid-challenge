import { convertDOBFormat } from "../convertDOB";

describe("convertDOBFormat", () => {
  it("should return the correct US date format", () => {
    const dateString = "1992-03-08T15:13:16.688Z";
    const expectedResult = "03/08/1992";

    expect(convertDOBFormat(dateString)).toBe(expectedResult);
  });

  it("should handle invalid date strings", () => {
    const dateString = "invalid";
    const expectedResult = "Invalid Date";

    expect(convertDOBFormat(dateString)).toBe(expectedResult);
  });
});
