import { MAX_COLS, MAX_ROWS } from "./constants";

const createRows = (row: number, startTile: Tile, endTile: Tile) => {
    const currRow: Tile[] = []
    for (let col = 0; col < MAX_COLS; col++) {
        currRow.push({
            row,
            col,
            isStart: row === startTile.row && col === startTile.col,
            isEnd: row === endTile.row && col === endTile.col,
            isWall: false,
            isPath: false,
            distance: Infinity,
            isTraversed: false,
            parent: null
        })
    }
    return currRow;
}

export const createGrid = (startTile: Tile, endTile: Tile) => {
    const grid: Grid = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        grid.push(createRows(row, startTile, endTile))
    }
    return grid
}


export const isStartOrEnd = (row: number, col: number) => {
    return (row === 1 && col === 1) || (row === MAX_ROWS-2 && col === MAX_COLS-2)
}

export const createNewGrid = (grid: Grid, row: number, col: number) => {
    const newGrid = grid.slice() //2d array so no destructuring
    const tile = newGrid[row][col]
    const newTile = {
        ...tile,
        isWall: !tile.isWall
    }
    newGrid[row][col] = newTile
    return newGrid
}