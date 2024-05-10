import React from 'react'
import phone from '../Images/phone.png'
import laptop from '../Images/laptop.png'
import headphones from '../Images/headphones.png'
import beauty from '../Images/beauty.png'
import gaming from '../Images/gaming.png'
import sporting from '../Images/sporting.png'

function Category() {
  return (
    <div className='Category'>
        <div  className="opc2">
<h4>Shop By Categories</h4>
<div className="categories">
<div className="cateach">
    <div className="each">
        <img className="phoneone" src={phone} alt="" />
    </div>
    <p>Phones & Accessories</p>
</div>
<div className="cateach">
<div className="each">
  <img src={laptop} alt="" className="laptop" />
</div>
<p>Laptop</p>
</div>
<div className="cateach">
<div className="each">
  <img src={headphones} alt="" className="headphones" />
</div>
<p>Head phones</p>
</div>
<div className="cateach">
<div className="each">
  <img src={beauty} alt="" className="beauty" />
</div>
<p>Beauty picks</p>
</div>
<div className="cateach">
<div className="each">
  <img src={gaming} alt="" className="gaming" />
</div>
<p>Gaming</p>
</div>
<div className="cateach">
<div className="each">
  <img src={sporting} alt="" className="sporting" />
</div>
<p>Sporting</p>
</div>
</div>
        </div>
    </div>
  )
}

export default Category