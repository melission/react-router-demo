import React from "react";
import {Link, Outlet, Route, Routes } from "react-router-dom";
import productData from "./productData";


const Products = ({ match }) => {
    const linkList = productData.map((product) => {
        return (
            <li key={product.id}>
                <Link to={`${product.id}`}>{product.name}</Link>
            </li>
        );
    });

    return (
        <div>
            <div>
                <h3>Products</h3>
                <ul>{linkList}</ul>
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