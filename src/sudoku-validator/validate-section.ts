import { Row } from "../utils/grid-types";

export default function validateSection(section: Row): boolean | null {
  const numCounter = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  for (const el of section) {
    if (el === null) {
      return null;
    }
    if (numCounter[el] > 0) {
      return false;
    } else {
      numCounter[el] = 1;
    }
  }
  return true;
}
