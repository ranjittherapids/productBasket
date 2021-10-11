import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
export default function ProductDetails() {
    const { product, ID } = useSelector(state => (state.product))
    return (
        <div className="container-fluid">
            {product.map(data => {
                if (data.id == ID) {
                    return <Card className="m-5 p-5">
                        <Card.Img  variant="top" src={data.image}/>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>{data.description}</Card.Text>
                            
                        </Card.Body>
                    </Card>
                }
            })}

        </div>
    )
}
