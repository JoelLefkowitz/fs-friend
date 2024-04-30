import { has } from "./apply";
import { pipe } from "ramda";
import path from "path";

export const fromRoot =
  (...segments: string[]) =>
  (...steps: string[]): string =>
    path.join(...segments, ...steps);

export const head = (str: string): string => path.basename(str);

export const tail = (str: string): string => path.dirname(str);

export const base = (str: string): string => str.split(path.sep)[0] ?? "";

export const ext = (str: string): string => path.extname(str);

export const dropBase = (str: string): string =>
  str.slice(base(str).length + 1, str.length);

export const dropExtension = (str: string): string =>
  str.slice(0, str.length - path.extname(str).length);

export const name = pipe(dropExtension, head);

export const hasHead = has(head);

export const hasTail = has(tail);

export const hasBase = has(base);

export const hasExtension = has(ext);

export const hasName = has(name);

export const segments = (str: string): string[] => str.split(path.sep);
