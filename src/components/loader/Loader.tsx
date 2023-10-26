import React from 'react'
import  './loader.css'
type Props = {}

const Loader = (props: Props) => {
  return (
    <div className='lds-roller'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
  )
}

export default Loader