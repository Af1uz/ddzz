import React, { memo, useState } from 'react'

const Apps = () => {

    

    console.log("Child");


  return (
    <div>
      <h1>Child</h1>
    </div>
  )
}

export default memo(Apps)
