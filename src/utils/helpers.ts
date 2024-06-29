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
