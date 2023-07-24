import React from "react";
import {Outlet} from "react-router-dom";
import productData from "./productData";
import Card from 'react-bootstrap/Card';
import "./styles.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ShortDescription = ({ product }) => {
    let text = product.description
    console.log(typeof text.length)
    if (text.length > 100) {        
        console.log("yes")
        return text.slice(0, 100)

    } else {
        console.log("no")
        return text
    }
}

const Products = ({ match }) => {
    const linkList = productData.map((product) => {
        return (
                <Card className="card-body p-0" border="light" style={{ height: "400px" }}>
                    <Card.Body>
                        <Card.Title className="card-title" style={{height: "100px"}}>{product.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{product.status}</Card.Subtitle>
                        <Card.Text className="card-desc">
                            Here is a quick product description: <ShortDescription product={product} />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Link href={`/products/${product.id}`}>See detailes</Card.Link>
                    </Card.Footer>
              </Card>
        );
    });

    return (
        <div>
            <div>
                <h3>Products</h3>
                <Container>
                    <Row className="justify-content-center">
                        {linkList}
                    </Row>
                </Container>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Products; 