import React, { useRef } from 'react'
import GridContainer from './grid'

type Props = {}

const Path = (props: Props) => {
  const isVisualizationRunningRef = useRef(false)

  return (
    <div className='h-screen w-screen flex flex-col'>
      <GridContainer isVisualizationRunningRef={isVisualizationRunningRef} />
    </div>
  )
}

export default Path