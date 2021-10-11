import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { selecteditemsID,additemsID } from '../redux/ActionCreate/action'
import { Link } from 'react-router-dom'
import './product.css'
export default function ProductContainer() {
    const dispatch = useDispatch()
    const productdata = useSelector(state => (state.product.product))
    return (
        <div className="container-fluid border">
            <div className="row">
                {
                    productdata.map((data,index) => {

                        return <div className=" col-auto mt-5 p-2" key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Link to={`/product${data.id}`}>
                                    <Card.Img className='img' variant="top" src={data.image}
                                        onClick={() => dispatch(selecteditemsID(data.id ? data.id : ''))}
                                    />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{data.Title}</Card.Title>
                                    <Card.Text>{`${data.description.substr(0, 50)}....`}</Card.Text>
                                    <Button onClick={()=>dispatch(additemsID(data))} >Add item</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    })
                }

            </div>
        </div>
    )
}

