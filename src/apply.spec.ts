import { has, successive } from "./apply";

describe("successive", () => {
  it("applies a function in succession", () => {
    const double = (x: number) => x * 2;
    expect(successive(double, 0)(1)).toBe(1);
    expect(successive(double, 1)(1)).toBe(2);
    expect(successive(double, 2)(1)).toBe(4);
    expect(successive(double, 3)(1)).toBe(8);
  });
});

describe("has", () => {
  it("checks if a function matches a predicate", () => {
    const first = (x: string) => x[0] ?? "";
    expect(has(first)("a")("abc")).toBe(true);
    expect(has(first)("a")("bc")).toBe(false);
  });
});
