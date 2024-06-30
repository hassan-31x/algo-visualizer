import React, { useState } from 'react'
import { usePathfinding } from '../../context/PathfindingContext'
import { MAX_COLS, MAX_ROWS } from '../../utils/constants'
import Tile from './tile'
import { createNewGrid, isStartOrEnd } from '../../utils/helpers'

type Props = {
    isVisualizationRunningRef: React.MutableRefObject<boolean>
}

const GridContainer = ({ isVisualizationRunningRef }: Props) => {
    const [mouseDown, setMouseDown] = useState(false)

    const { grid, setGrid } = usePathfinding()

    const handleMouseDown = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return
        
        setMouseDown(true)
        const newGrid = createNewGrid(grid, row, col)
        setGrid(newGrid)
    }
    
    const handleMouseUp = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return
        
        setMouseDown(false)
    }

    const handleMouseEnter = (row: number, col: number) => {
        if (isVisualizationRunningRef.current || isStartOrEnd(row, col)) return

        if (mouseDown) {
            const newGrid = createNewGrid(grid, row, col)
            setGrid(newGrid)
        }
    }

  return (
    <div className={`
        flex flex-col h-full items-center justify-center border-sky-300
        min-h-[${MAX_ROWS * 7}px] xs:min-h-[${MAX_ROWS * 8}px] md:min-h-[${MAX_ROWS * 15}px] lg:min-h-[${MAX_ROWS * 17}px]
        w-[${MAX_COLS * 7}px] xs:w-[${MAX_COLS * 8}px] md:w-[${MAX_COLS * 15}px] lg:w-[${MAX_COLS * 17}px]
    `}>
        {grid.map((row, rowIndex) => (
            <div key={rowIndex} className='flex'>
                {row.map((tile, tileIndex) => (
                    <Tile
                        key={tileIndex}
                        row={tile.row}
                        col={tile.col}
                        isStart={tile.isStart}
                        isEnd={tile.isEnd}
                        isWall={tile.isWall}
                        isPath={tile.isPath}
                        distance={tile.distance}
                        isTraversed={tile.isTraversed}

                        handleMouseDown={() => handleMouseDown(tile.row, tile.col)}
                        handleMouseEnter={() => handleMouseEnter(tile.row, tile.col)}
                        handleMouseUp={() => handleMouseUp(tile.row, tile.col)}
                    />
                ))}
            </div>
        ))}
    </div>
  )
}

export default GridContainer