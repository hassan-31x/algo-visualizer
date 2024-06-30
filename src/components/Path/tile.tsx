import React from 'react'
import { MAX_ROWS } from '../../utils/constants';

type Props = {
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    distance: number;
    isTraversed: boolean;
    handleMouseDown: (row: number, col: number) => void;
    handleMouseEnter: (row: number, col: number) => void;
    handleMouseUp: (row: number, col: number) => void;
}

const Tile = (props: Props) => {
    const { row, col, isStart, isEnd, isWall, isPath, distance, isTraversed, handleMouseDown, handleMouseEnter, handleMouseUp } = props

    const getTailwindStyles = () => {
        let base = 'w-[7px] xs:w-[8px] md:w-[15px] lg:w-[17px] h-[7px] xs:h-[8px] md:h-[15px] lg:h-[17px] border-t border-r border-sky-200 cursor-pointer'

        if (isTraversed) {
            return `${base} bg-cyan-400`
        }
        if (isStart) {
            return `${base} bg-green-400`
        }
        if (isEnd) {
            return `${base} bg-red-400`
        }
        if (isWall) {
            return `${base} bg-gray-400`
        }
        if (isPath) {
            return `${base} bg-yellow-400`
        }

        return base
    }

    const tileStyle = getTailwindStyles()
    const borderStyle = row === MAX_ROWS-1 ? 'border-b' : col === 0 ? 'border-l' : ''
    const edgeStyle = row === MAX_ROWS-1 && col === 0 ? 'border-l' : ''

  return (
    <div 
        className={`${tileStyle} ${borderStyle} ${edgeStyle}`} id={`${row}-${col}`}
        onMouseDown={() => handleMouseDown(row, col)}
        onMouseEnter={() => handleMouseEnter(row, col)}
        onMouseUp={() => handleMouseUp(row, col)}
    />
  )
}

export default Tile