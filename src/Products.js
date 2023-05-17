import React from "react";
import {Link, Outlet, Route, Routes } from "react-router-dom";
import productData from "./productData";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
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
                <Card className="card-body" border="light" style={{ height: "400px" }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
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
                {/* <CardGroup className="card-deck">{linkList}</CardGroup> */}
                <Container>
                    <Row>
                        {linkList}
                    </Row>

                </Container>
            </div>
            <div>
                <Outlet />
            </div>
            {/* <Routes>
                <Route path=":id" element={<Product data={productData}></Product>}></Route>
                <Route path="/"><p>Select a product.</p></Route>
            </Routes> */}

        </div>
    )
}

export default Products;