import React from 'react'
import '../App.css'


const container = props => {
  return (
    <>
    
    <div className="contain">
        <div className="cont">
          <img src= {props.img} />
          <div className="name">
            <h5>{props.fullName}</h5>
            <p>{props.location}</p>
          </div>
        </div>
        <h1>"</h1>
        <b>Thank you for your great service</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nisi labore corporis tempora ipsa accusamus voluptatem ea. Laboriosam recusandae.</p>
      </div>
    </>
  )
}

container.propTypes = {}

export default container