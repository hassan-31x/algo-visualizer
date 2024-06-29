type Algorithms = 'BFS' | 'DFS' | 'A_STAR' | 'DIJKSTRA';

type Maze = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION'

type Tile = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isTraversed: boolean;
    parent: Tile | null;
}

type Grid = Tile[][];