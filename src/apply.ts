import { range } from "ramda";

export const successive =
  <T>(f: (x: T) => T, n: number) =>
  (t: T): T =>
    range(0, n).reduce(f, t);

export const has =
  <T>(f: (str: T) => T) =>
  (target: T) =>
  (str: T): boolean =>
    f(str) === target;

export const reducer =
  <T>(filter: (x: T) => boolean) =>
  (map: (x: T) => T) =>
  (arr: T[]): T[] =>
    arr.reduce<T[]>((acc, x) => (filter(x) ? acc.concat(map(x)) : acc), []);
