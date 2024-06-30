import React from 'react'
import { usePathfinding } from '../../context/PathfindingContext'
import { MAX_COLS, MAX_ROWS } from '../../utils/constants'
import Tile from './tile'

type Props = {}

const GridContainer = (props: Props) => {
    const { grid } = usePathfinding()
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
                    />
                ))}
            </div>
        ))}
    </div>
  )
}

export default GridContainer