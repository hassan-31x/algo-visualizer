import React, { createContext, useContext, useState } from "react";
import { END_TILE, START_TILE } from "../utils/constants";

interface TileContext {
    startTile: Tile;
    setStartTile: (tile: Tile) => void;
    endTile: Tile;
    setEndTile: (tile: Tile) => void;
}

export const TileContext = createContext<TileContext | undefined>(undefined);

export const TileProvider = ({ children }: { children: React.ReactNode }) => {
    const [startTile, setStartTile] = useState<Tile>(START_TILE);
    const [endTile, setEndTile] = useState<Tile>(END_TILE);

    return (
        <TileContext.Provider value={{
            startTile: startTile!,
            setStartTile,
            endTile: endTile!,
            setEndTile
        }}>
            {children}
        </TileContext.Provider>
    );
};

export const useTile = () => {
    const context = useContext(TileContext);

    if (!context) {
        throw new Error('useTile must be used within a TileProvider');
    }

    return context
}