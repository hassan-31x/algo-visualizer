import React from 'react'
import { PathfindingProvider } from '../context/PathfindingContext'
import Path from '../components/Path'
import { TileProvider } from '../context/TileContext'
import { SpeedProvider } from '../context/SpeedContext'

type Props = {}

const PathFinding = (props: Props) => {
  return (
    <PathFindingWrapper>
      <Path />
    </PathFindingWrapper>
  )
}

const PathFindingWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          {children}
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default PathFinding