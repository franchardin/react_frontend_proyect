import "./Segment.css"
import React from 'react'
import placeholder from "../../assets/images/placeholder.png"

const Segment = ({title}) => {

  return (
    <div className='segment'> 
      <p className="title">  {title}</p>
      <div className='row'>
      <img className='placeholer' src={placeholder} alt='' />
      <img className='placeholer' src={placeholder} alt='' />
      <img className='placeholer' src={placeholder} alt='' />
      <img className='placeholer' src={placeholder} alt='' />
      <img className='placeholer' src={placeholder} alt='' />
      <img className='placeholer' src={placeholder} alt='' />
      </div>
      <button> </button>
    </div>

  )
}



export default Segment