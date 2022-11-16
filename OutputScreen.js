import React from 'react'
import OutputScreenRow from './OutputScreenRow'

const OutputScreen = ({question,answer}) => {
  return (
    <div className='screen'>
       {
        question !== "" ? <OutputScreenRow output={question}/> :  
        <OutputScreenRow  output={answer}/>
       }
    </div>
  )
}

export default OutputScreen