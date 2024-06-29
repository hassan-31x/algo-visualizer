import React from 'react'
import { PathfindingProvider } from '../context/PathfindingContext'
import Path from '../components/Path'

type Props = {}

const PathFinding = (props: Props) => {
  return (
    <PathfindingProvider>
        <Path />
    </PathfindingProvider>
  )
}

export default PathFinding