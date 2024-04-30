import { head } from "./paths";
import { without } from "ramda";
import fs from "fs";
import path from "path";

export const size = (str: string): number =>
  fs.existsSync(str) ? fs.lstatSync(str).size : 0;

export const isDir = (str: string): boolean =>
  fs.existsSync(str) && fs.lstatSync(str).isDirectory();

export const isFile = (str: string): boolean =>
  fs.existsSync(str) && fs.lstatSync(str).isFile();

export const isSocket = (str: string): boolean =>
  fs.existsSync(str) && fs.lstatSync(str).isSocket();

export const children = (str: string): string[] =>
  isDir(str) ? fs.readdirSync(str) : [];

export const subdirs = (str: string): string[] =>
  isDir(str)
    ? children(str).filter((child) => isDir(path.resolve(str, child)))
    : [];

export const subfiles = (str: string): string[] =>
  isDir(str)
    ? children(str).filter((child) => isFile(path.resolve(str, child)))
    : [];

export const siblings = (str: string): string[] =>
  without([head(str)], children(path.resolve(str, "..")));
