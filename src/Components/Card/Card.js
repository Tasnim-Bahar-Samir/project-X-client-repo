import React from 'react'
import './Card.css'
import logo from '../../assets/image/logo.svg'

const Card = ({card}) => {
  const {name,img,details} = card
  console.log(img,name)
  return (
    <div className='card' style={{ backgroundImage:`url(${img})`}}>
      <div className='card-details'>
        <img src={logo} alt="" />
        <h3>{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Card