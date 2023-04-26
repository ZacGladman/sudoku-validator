import { MiniGridLabel } from "../../utils/grid-types";
import reverseLocateMiniGrid from "./reverseLocateMiniGrid";

export default function rmvNumFromGrid(
  numToRemove: number,
  whichGrid: MiniGridLabel,
  possibilities: (number[] | null)[][]
): void {
  const gridStartCoordinates = reverseLocateMiniGrid(whichGrid);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const indexToRmv =
        possibilities[gridStartCoordinates[0] + i][
          gridStartCoordinates[1] + j
        ]?.indexOf(numToRemove);
      //   console.log("index to remove", indexToRmv);
      if (indexToRmv !== undefined && indexToRmv >= 0) {
        possibilities[gridStartCoordinates[0] + i][
          gridStartCoordinates[1] + j
        ]?.splice(indexToRmv, 1);
      }
    }
  }
  //   console.log("starting coords: ", gridStartCoordinates);
  //   console.log("num to remove: ", numToRemove);
  //   console.log(
  //     "new possibilities grid once num removed from mini grid: ",
  //     possibilities
  //   );
}

// const possibilities = [
//   [[8], null, null, null, [7, 8], null, null, null, [2, 8]],
//   [
//     null,
//     [2, 6, 8],
//     [4, 8],
//     [6, 8],
//     [3, 4, 6, 8],
//     [3, 4, 6],
//     [2, 9],
//     [1, 8, 9],
//     null,
//   ],
//   [null, [6, 8], null, null, [4, 6, 8], null, null, [8], null],
//   [
//     null,
//     [1, 5, 7, 8],
//     [4, 5, 8],
//     [5, 6, 8],
//     [1, 4, 5, 6, 8],
//     [1, 4, 6],
//     [4, 7, 9],
//     [6, 7, 8, 9],
//     null,
//   ],
//   [[1, 4, 8], null, null, null, [1, 4, 8], null, null, null, [8]],
//   [
//     null,
//     [5, 7, 8],
//     [4, 5, 8],
//     [5, 6, 8],
//     [2, 3, 4, 5, 6, 8],
//     [3, 4, 6],
//     [4, 7],
//     [6, 7, 8],
//     null,
//   ],
//   [null, [5], null, null, [5, 6, 7], null, null, [6, 7], null],
//   [null, [1, 5, 8], [5, 8, 9], [5, 7], [1, 5, 7, 9], [1], [2, 7], [3, 7], null],
//   [[1], null, null, null, [1, 6, 9], null, null, null, [6]],
// ];

// rmvNumFromGrid(8, "A", possibilities);
