import { act, renderHook } from "@testing-library/react-hooks";
import { Agent } from "../../types/agent";
import useAgent from "../useAgent";

describe("useAgent", () => {
  it("returns a function and a boolean", () => {
    const { result } = renderHook(() => useAgent());
    expect(Array.isArray(result.current)).toBe(true);
    expect(typeof result.current[0]).toBe("function");
    expect(typeof result.current[1]).toBe("boolean");
  });

  it("the function returns a Promise that resolves to an Agent object", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAgent());
    act(() => {
      result.current[0]().then((agent: Agent | null) => {
        expect(typeof agent).toBe("object");
        expect(typeof agent?.firstName).toBe("string");
        expect(typeof agent?.lastName).toBe("string");
        expect(typeof agent?.codename).toBe("string");
        expect(typeof agent?.city).toBe("string");
        expect(typeof agent?.state).toBe("string");
        expect(typeof agent?.country).toBe("string");
        expect(typeof agent?.gender).toBe("string");
        expect(typeof agent?.dob).toBe("string");
        expect(typeof agent?.timezone).toBe("object");
        expect(typeof agent?.timezone.offset).toBe("string");
        expect(typeof agent?.timezone.description).toBe("string");
        expect(typeof agent?.eyeColor).toBe("string");
        expect(typeof agent?.largePhoto).toBe("string");
        expect(typeof agent?.coordinates).toBe("object");
        expect(typeof agent?.coordinates.latitude).toBe("string");
        expect(typeof agent?.coordinates.longitude).toBe("string");
        expect(typeof agent?.address).toBe("string");
      });
    });
    await waitForNextUpdate();
  });

  it("sets isLoading to true and false correctly", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAgent());
    act(() => {
      result.current[0]();
    });
    expect(result.current[1]).toBe(true);
    await waitForNextUpdate();
    expect(result.current[1]).toBe(false);
  });

  it("handles errors correctly", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.reject(new Error("fetch error")));
    const { result, waitForNextUpdate } = renderHook(() => useAgent());
    act(() => {
      result.current[0]().then((agent: Agent | null) => {
        expect(agent).toBe(null);
      });
    });
    await waitForNextUpdate();
    expect(result.current[1]).toBe(false);
  });
});
