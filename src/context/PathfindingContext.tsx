import React, { useContext, useState, createContext } from "react";

import { createGrid } from "../utils/helpers";
import { END_TILE, START_TILE } from "../utils/constants";

interface PathfindingContext {
    algorithm: Algorithms;
    setAlgorithm: (algorithm: Algorithms) => void;
    maze: Maze;
    setMaze: (maze: Maze) => void;
    grid: Grid
    setGrid: (grid: Grid) => void;
    graphLoaded: boolean;
    setGraphLoaded: (graphLoaded: boolean) => void;
}

export const PathfindingContext = createContext<PathfindingContext | undefined>(undefined);

export const PathfindingProvider = ({ children }: { children: React.ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<Algorithms>('BFS');
    const [maze, setMaze] = useState<Maze>('NONE');
    const [grid, setGrid] = useState<Grid>(createGrid(START_TILE, END_TILE));
    const [graphLoaded, setGraphLoaded] = useState<boolean>(false);

    return (
        <PathfindingContext.Provider value={{
            algorithm,
            setAlgorithm,
            maze,
            setMaze,
            grid,
            setGrid,
            graphLoaded,
            setGraphLoaded
        }}>
            {children}
        </PathfindingContext.Provider>
    );
};


export const usePathfinding = () => {
    const context = useContext(PathfindingContext);

    if (!context) {
        throw new Error('usePathfinding must be used within PathfindingProvider');
    }

    return context
}