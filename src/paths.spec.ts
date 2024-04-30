import { dropExtension, ext, head, tail } from "./paths";
import { toPairs } from "ramda";

const fixtures = {
  "": {
    head: "",
    tail: ".",
    ext: "",
    dropExtension: "",
    name: "",
  },
  ".": {
    head: ".",
    tail: ".",
    ext: "",
    dropExtension: ".",
    name: "",
  },
  "a.ts": {
    head: "a.ts",
    tail: ".",
    ext: ".ts",
    dropExtension: "a",
    name: "a",
  },
  "a/b.ts": {
    head: "b.ts",
    tail: "a",
    ext: ".ts",
    dropExtension: "a/b",
    name: "b",
  },
  "a/b/c.ts": {
    head: "c.ts",
    tail: "a/b",
    ext: ".ts",
    dropExtension: "a/b/c",
    name: "c",
  },
};

describe("head", () => {
  it("evaluates a path's head", () => {
    toPairs(fixtures).map(([str, field]) => {
      expect(head(str)).toBe(field.head);
    });
  });
});

describe("tail", () => {
  it("evaluates a path's tail", () => {
    toPairs(fixtures).map(([str, field]) => {
      expect(tail(str)).toBe(field.tail);
    });
  });
});

describe("ext", () => {
  it("evaluates a path's extension", () => {
    toPairs(fixtures).map(([str, field]) => {
      expect(ext(str)).toBe(field.ext);
    });
  });
});

describe("dropExtension", () => {
  it("drops a path's extension", () => {
    toPairs(fixtures).map(([str, field]) => {
      expect(dropExtension(str)).toBe(field.dropExtension);
    });
  });
});
