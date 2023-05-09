import {
  IPossOccurrenceCount,
  MiniGridLabel,
  SolverGrid,
  SolverMiniGrids,
} from "../utils/grid-types";
import missingNumsRows from "./preparation/rows/missingNumsRows";
import columnsCreator from "./preparation/columns/columnsCreator";
import createAllMiniGrids from "./preparation/mini-grids/create-mini-grids";
import calculatePossibilities from "./preparation/possibilities/calculatePossibilities";
import { testGrid2 } from "../utils/solver-test-grids";
import { locateMiniGrid } from "./preparation/create-empty-grid";
import rmvNumFromGrid from "./solver-utils/rmvNumFromGrid";
import reverseLocateMiniGrid from "./solver-utils/reverseLocateMiniGrid";

export default function sudokuSolver(grid: SolverGrid): SolverGrid | false {
  const gridCopy = [...grid]; // we make a copy of the original sudoku grid, as we don't want to change the original. We will add values to this copy and return it if solved.
  const rowsMissingNums = missingNumsRows(grid); // the numbers missing from each row.
  const columnsMissingNums = columnsCreator(grid); // the numbers missing from each column.
  const miniGridsMissingNums = createAllMiniGrids(grid); // the numbers missing from each mini (3x3) grid.
  const possibilities = calculatePossibilities(
    grid,
    rowsMissingNums,
    columnsMissingNums,
    miniGridsMissingNums
  );

  // we are going to loop through the possibilities grid to check for squares with only one possible solution.
  // we ALSO need to check if a given number only appears as a possibility in that row/column/grid once.

  for (let row = 0; row < 9; row++) {
    const possOccurrenceCount: IPossOccurrenceCount = {};
    /* to keep track of which squares each row's missing numbers can go into. If there's only one possibility for a given number, it must go there. 
      In this case, we know the row, so we just have to keep track of the column index */
    for (const num of rowsMissingNums[row]) {
      possOccurrenceCount[num] = [];
    } // we add each missing number from that row to the possOccurrenceCount object as a key, whose value starts as an empty array.
    for (let column = 0; column < 9; column++) {
      const whichGrid = locateMiniGrid(row, column);
      const possArray = possibilities[row][column]; // list of all possibilities for that square. It's either an array, or null.
      if (possArray) {
        // if not null (i.e. if an array, we look at what's inside...)
        if (possArray.length === 1) {
          // if there's only one item in the array, then that number MUST go in this square. Therefore...

          possibilities[row][column] = null;
          /* the corresponding square in the possibilities grid (list of all possibilities for each square) becomes NULL - 
          there are no possible values, since it has been filled! */
          gridCopy[row][column].value = possArray[0];
          /* the value of the corresponding square in the copy of the original grid (don't want to edit) becomes this value */

          rmvNumFromRowAndColAndGrid(
            possArray[0],
            row,
            column,
            whichGrid,
            possibilities,
            rowsMissingNums,
            columnsMissingNums,
            miniGridsMissingNums
          );
        } else {
          for (const num of possArray) {
            possOccurrenceCount[num] = [...possOccurrenceCount[num], column]; // if there's more than one possibility, we add the column number to each number's array in possOccurrenceCount.
          }
        }
      }
    }
    /* 
    Once we have checked every square, we look at the possOccurrenceCount object. If a value can only go in one square (i.e. if its array contains one column index),
    then the square at that column and row MUST contain that value.
    */
    for (const num of rowsMissingNums[row]) {
      if (possOccurrenceCount[num].length === 1) {
        const column = possOccurrenceCount[num][0];
        const whichGrid = locateMiniGrid(row, column);

        rmvNumFromRowAndColAndGrid(
          num,
          row,
          column,
          whichGrid,
          possibilities,
          rowsMissingNums,
          columnsMissingNums,
          miniGridsMissingNums
        );

        possibilities[row][column] = null;
        gridCopy[row][column].value = num;
      }
    }
  }
  console.log("UPDATED POSSIBILITIES AFTER ROWS CHECKED", possibilities);
  console.log("NEW GRID", gridCopy);

  // NOW WE DO THE SAME THING FOR THE COLUMNS, CHECKING FOR ONLY SOLUTIONS
  console.log("columnsMissingNums: ", columnsMissingNums);
  for (let column = 0; column < 9; column++) {
    const possOccurrenceCount: IPossOccurrenceCount = {};
    for (const num of columnsMissingNums[column]) {
      if (num !== null) {
        possOccurrenceCount[num] = [];
      }
    }
    for (let row = 0; row < 9; row++) {
      const whichGrid = locateMiniGrid(row, column);
      const possArray = possibilities[row][column];
      if (possArray) {
        if (possArray.length === 1) {
          possibilities[row][column] = null;
          gridCopy[row][column].value = possArray[0];

          rmvNumFromRowAndColAndGrid(
            possArray[0],
            row,
            column,
            whichGrid,
            possibilities,
            rowsMissingNums,
            columnsMissingNums,
            miniGridsMissingNums
          );
        } else {
          for (const num of possArray) {
            possOccurrenceCount[num] = [...possOccurrenceCount[num], row];
          }
        }
      }
    }

    for (const num of columnsMissingNums[column]) {
      if (num && possOccurrenceCount[num].length === 1) {
        const row = possOccurrenceCount[num][0];
        const whichGrid = locateMiniGrid(row, column);

        rmvNumFromRowAndColAndGrid(
          num,
          row,
          column,
          whichGrid,
          possibilities,
          rowsMissingNums,
          columnsMissingNums,
          miniGridsMissingNums
        );

        possibilities[row][column] = null;
        gridCopy[row][column].value = num;
      }
    }
  }

  // NOW WE DO THE SAME THING FOR THE MINI GRIDS, CHECKING FOR ONLY SOLUTIONS
  console.log("miniGridsMissingNums: ", miniGridsMissingNums);
  const gridsList: MiniGridLabel[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
  ];
  for (const grid of gridsList) {
    const possOccurrenceCount: IPossOccurrenceCount = {};
    const thisGridsMissingNums = getMiniGridMissingNums(
      miniGridsMissingNums,
      grid
    );
    for (const num of thisGridsMissingNums) {
      if (num !== null) {
        possOccurrenceCount[num] = [];
      }
    }
    const startingPoint = reverseLocateMiniGrid(grid);
    console.log(`grid: ${grid}; starting point: ${startingPoint}`);
  }

  console.log("UPDATED POSSIBILITIES AFTER COLUMNS CHECKED", possibilities);
  console.log("NEW GRID", gridCopy);
  console.log("miniGridMissingNums: ", miniGridsMissingNums);
  return false;
}

function rmvNumFromRowOrCol(
  numToRemove: number,
  whichRowOrCol: number,
  possibilities: (number[] | null)[][],
  rowOrCol: "r" | "c"
): void {
  for (let i = 0; i < 9; i++) {
    const possArray =
      rowOrCol === "r"
        ? possibilities[whichRowOrCol][i]
        : possibilities[i][whichRowOrCol];
    if (possArray) {
      const indexToRmv = possArray.indexOf(numToRemove);
      if (indexToRmv >= 0) {
        rowOrCol === "r"
          ? possibilities[whichRowOrCol][i]?.splice(indexToRmv, 1)
          : possibilities[i][whichRowOrCol]?.splice(indexToRmv, 1);
      }
    }
  }
}

function rmvNumFromRowAndColAndGrid(
  numToRemove: number,
  row: number,
  column: number,
  whichGrid: MiniGridLabel,
  possibilities: (number[] | null)[][],
  rowsMissingNums: number[][],
  columnsMissingNums: (number | null)[][],
  miniGridsMissingNums: SolverMiniGrids
): void {
  // loop through row, remove number from other squares' possibilities arrays
  rmvNumFromRowOrCol(numToRemove, row, possibilities, "r");

  // loop through column, do the same
  rmvNumFromRowOrCol(numToRemove, column, possibilities, "c");

  // loop through 3x3 grid, do the same
  rmvNumFromGrid(numToRemove, whichGrid, possibilities);

  rowsMissingNums[row].splice(rowsMissingNums[row].indexOf(numToRemove), 1); // remove it from the list of its row's missing numbers (it has been added now!)
  columnsMissingNums[column].splice(
    columnsMissingNums[column].indexOf(numToRemove),
    1
  ); // remove it from the list of its column's missing numbers (it has been added now!)
  miniGridsMissingNums[whichGrid].splice(
    miniGridsMissingNums[whichGrid].indexOf(numToRemove),
    1
  ); // remove it from the list of its mini grid's missing numbers (it has been added now!)
}

function getMiniGridMissingNums(
  miniGridMissingNums: SolverMiniGrids,
  grid: string
): (number | null)[] {
  if (grid === "A") {
    return miniGridMissingNums["A"];
  } else if (grid === "B") {
    return miniGridMissingNums["B"];
  } else if (grid === "C") {
    return miniGridMissingNums["C"];
  } else if (grid === "D") {
    return miniGridMissingNums["D"];
  } else if (grid === "E") {
    return miniGridMissingNums["E"];
  } else if (grid === "F") {
    return miniGridMissingNums["F"];
  } else if (grid === "G") {
    return miniGridMissingNums["G"];
  } else if (grid === "H") {
    return miniGridMissingNums["H"];
  } else {
    return miniGridMissingNums["I"];
  }
}

sudokuSolver(testGrid2);
