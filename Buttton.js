import React from 'react'

const Buttton = ({handleClick,label}) => {
  return (
   <div className='botton'>
     <input type="button" className='button' onClick={handleClick} value={label}/>
   </div>
  )
}

export default Buttton