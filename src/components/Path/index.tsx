import React from 'react'
import GridContainer from './grid'

type Props = {}

const Path = (props: Props) => {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <GridContainer />
    </div>
  )
}

export default Path