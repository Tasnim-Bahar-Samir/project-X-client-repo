import React from 'react'
import './Card.css'
import logo from '../../assets/image/logo.svg'

const Card = ({card}) => {
  const {name,img,details} = card
  console.log(img,name)
  return (
    <>
    <div className='card' style={{ backgroundImage:`url(${img})`,width:'100%'}}>
        <div className='card-details'>
          <img src={logo} alt="" />
          <h3 className='name-title'>{name}</h3>
          <p>{details}</p>
          <button className='btn'>View Details</button>
      </div>
    </div>
    </>
  )
}

export default Card