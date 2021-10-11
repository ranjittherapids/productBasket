import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
export default function Header() {

    const basket = useSelector(state => state.product.basket)
    return (

        <div className='row'>
        <Link to="/allproduct" className="col-6 p-3">
        <div >PRODUCT</div>
        </Link>
       
         <Link to="/basket" className="col-6 p-3">
         <div className="col" >{`BASKET ${basket.length}`}</div>
         </Link>  
        </div>
    )
}
