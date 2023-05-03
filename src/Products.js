import React from "react";
import {Link, Outlet, Route, Routes } from "react-router-dom";
import productData from "./productData";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Products = ({ match }) => {
    const linkList = productData.map((product) => {
        return (
                <Card border="light" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{product.status}</Card.Subtitle>
                  <Card.Text>
                    Here is a quick product description: {product.description}
                  </Card.Text>
                  <Card.Link href={`/products/${product.id}`}>See detailes</Card.Link>
                </Card.Body>
              </Card>
        );
    });

    return (
        <div>
            <div>
                <h3>Products</h3>
                <CardGroup>{linkList}</CardGroup>
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