import React from 'react'

const OutputScreenRow = ({output}) => {
  return (
    <div className='screen-row'>
        <input type="text" value={output} readOnly/>
    </div>
  )
}

export default OutputScreenRow