

import React,{useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import StarRatings from 'react-star-ratings'
import {removeitemsID} from '../redux/ActionCreate/action'

export default function Basket() {
    const [rate, setrate] = useState()
    const dispatch = useDispatch()
    const basket = useSelector(state => state.product.basket)
    return (
        <div className="container">

            this is basket
            {
                basket.map((data, index) => {  
                    {/* setrate(data.rating.rate)   */}
                    return <div className="row border" key={index}>
                        <div className="col-md-4 col-sm-auto">
                            <img className="p-4" style={{ width: "100%", height: "350px" }} src={data.image} alt="network problems" />
                        </div>
                        <div className=" d-flex col-md-7 col-sm-auto  row ">
                            <h3 >{data.title}</h3>
                            <StarRatings
                                starRatedColor="orange"
                                numberOfStars={Math.floor(data.rating.rate)} /> 
                            <p >{`prices:-${data.price}`}</p>
                            <p >{data.description}</p>
                        </div>
                        <div className="editable">
                            <button onClick={()=>dispatch(removeitemsID(index))}>delete</button>
                        </div>
                    </div>

                })
            }


        </div>
    )
}
