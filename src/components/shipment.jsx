import React from 'react'
import './shipment.css'
import Mid from './mid.jsx'

const shipment = () => {
  return (
    <div className='book'>
    <div className='cardEx'>
        <Mid num="2043" title="Active Customers"/>
        <Mid num="3298" title="Monthly Shipments"/>
        <Mid num="5 min" title="To Book A Shipment"/>

    </div>
    <div className='cardAx'>
        <h3 className="ready">Ready to book <br /> your shipment?</h3>
        <p>Create and account to book. It <br />only takes a few steps!</p>
        <button className='Acc'>Create Account</button>
    </div>
    </div>
  )
}

export default shipment