import { describe, it, expect } from "vitest";

describe("some teest title", () => {
  it("should render 2", () => {
    expect(2).toBeGreaterThan(1);
  });

  it("should less then 1", () => {
    expect(-1).toBeLessThan(1);
  });
});
