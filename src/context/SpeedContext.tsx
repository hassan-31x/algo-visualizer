import React, { createContext, useContext, useState } from "react";
import { END_TILE, START_TILE } from "../utils/constants";

interface SpeedContext {
    speed: Speed;
    setSpeed: (speed: Speed) => void;
}

export const SpeedContext = createContext<SpeedContext | undefined>(undefined);

export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
    const [speed, setSpeed] = useState<Speed>(1);

    return (
        <SpeedContext.Provider value={{
            speed,
            setSpeed
        }}>
            {children}
        </SpeedContext.Provider>
    );
};

export const useSpeed = () => {
    const context = useContext(SpeedContext);

    if (!context) {
        throw new Error('useSpeed must be used within a SpeedProvider');
    }

    return context
}