import { aperture, count, identical } from "ramda";
import { reducer } from "./apply";

export const prefix =
  (pre: string) =>
  (str?: string): string =>
    `${pre}${str ?? ""}`;

export const suffix =
  (suf: string) =>
  (str?: string): string =>
    `${str ?? ""}${suf}`;

export const dropPrefix =
  (pre: string) =>
  (str?: string): string =>
    str?.startsWith(pre) ? str.slice(pre.length, str.length) : str ?? "";

export const dropSuffix =
  (suf: string) =>
  (str?: string): string =>
    str?.endsWith(suf) ? str.slice(0, str.length - suf.length) : str ?? "";

export const reducePrefix = (pre: string): ((arr: string[]) => string[]) =>
  reducer((i: string) => i.startsWith(pre))(dropPrefix(pre));

export const reduceSuffix = (pre: string): ((arr: string[]) => string[]) =>
  reducer((i: string) => i.endsWith(pre))(dropSuffix(pre));

export const hash = (str: string): number =>
  str.split("").reduce((acc, x) => acc + x.charCodeAt(0), 0);

export const substrings = (str: string, substr: string): number =>
  count(
    identical(substr),
    aperture(Math.max(substr.length, 1), str.split("")).map((i: string[]) =>
      i.join(""),
    ),
  );
