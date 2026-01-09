import React, { memo } from 'react'
import Child from '../components/Apps'

const Tablr = ({count}) => {

    console.log("Parent")

  return (
    <div>
        <h1>Parent : {count} </h1>
      <Child/>
    </div>
  )
}

export default memo(Tablr)
