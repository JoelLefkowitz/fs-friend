import {
  dropPrefix,
  dropSuffix,
  prefix,
  substrings,
  suffix,
} from "./components";

describe("prefix", () => {
  it("adds a prefix to a string", () => {
    expect(prefix("a")("b")).toBe("ab");
  });
});

describe("suffix", () => {
  it("adds a suffix to a string", () => {
    expect(suffix("a")("b")).toBe("ba");
  });
});

describe("dropPrefix", () => {
  it("removes a prefix from a string", () => {
    expect(dropPrefix("a")("ab")).toBe("b");
    expect(dropPrefix("a")("c")).toBe("c");
  });
});

describe("dropSuffix", () => {
  it("removes a suffix from a string", () => {
    expect(dropSuffix("b")("ab")).toBe("a");
    expect(dropSuffix("b")("c")).toBe("c");
  });
});

describe("substrings", () => {
  it("counts the occurrences of substring allowing overlaps", () => {
    expect(substrings("", "")).toBe(0);
    expect(substrings("a", "")).toBe(0);
    expect(substrings("", "a")).toBe(0);

    expect(substrings("aaa", "a")).toBe(3);
    expect(substrings("aaa", "aa")).toBe(2);
    expect(substrings("aaa", "aaa")).toBe(1);
  });
});
