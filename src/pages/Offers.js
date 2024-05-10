import React from 'react'
import {RxDoubleArrowRight} from 'react-icons/rx'
import{AiFillStar} from 'react-icons/ai'
import jbl from '../Images/jbl.png'
import sneakers from '../Images/sneakers.png'
import samsung from '../Images/samsung.png'

function Offers() {

  
  return (
    <div className='Offers'>
    <div className="opc">
  <div className="hot">
    <h2>Hot Deals</h2>
    <h4>View All <RxDoubleArrowRight/> </h4>
  </div>
  <div className="deals">
    <div className="deal first">
    <h5>40% off</h5>
<img src={jbl} alt="" className="jbl" />
<h6>Official store</h6>
<div className="star">
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
     <span>4.7</span>
</div>
<p>JBL FLip 6 Green</p>
    </div>
    <div className="deal second">
    <h5>40% off</h5>
      <img src={sneakers} alt="" className="sneakers" />
      <h6>Official store</h6>
      <div className="star">
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
     <span>4.7</span>
</div>
      <p>Comfortable Casual Sneakers White</p>
    </div>
    <div className="deal third">
    <h5>40% off</h5>
      <img src={samsung} alt="" className="samsung" />
      <h6>Official store</h6>
      <div className="star">
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
  <AiFillStar className='rate'/>
     <span>4.7</span>
</div>
<p>Samsung Galaxy S23 Ultra</p>
    </div>
  </div>

    </div>
    </div>
  )
}

export default Offers