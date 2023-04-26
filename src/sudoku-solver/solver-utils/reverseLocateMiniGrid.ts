import { MiniGridLabel } from "../../utils/grid-types";

export default function reverseLocateMiniGrid(
  whichGrid: MiniGridLabel
): number[] {
  switch (whichGrid) {
    case "A":
      return [0, 0];
    case "B":
      return [0, 3];
    case "C":
      return [0, 6];
    case "D":
      return [3, 0];
    case "E":
      return [3, 3];
    case "F":
      return [3, 6];
    case "G":
      return [6, 0];
    case "H":
      return [6, 3];
    case "I":
      return [6, 6];
  }
}
