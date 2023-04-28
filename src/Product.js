import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";

const Product = ( ) => {
    const {productID} = useParams();
    const product = productData.find(p => p.id === Number(productID));
    console.log(product)

    let productInfo;

    if (product) {
        productInfo = (
            <div>
                <h3> {product.name} </h3>
                <p>{ product.description }</p>
                <hr></hr>
                <h4>{product.status}</h4>
            </div>
        );
    } else {
        productInfo = <h2>Sorry. The product doesn't excist.</h2>
    }

    return (
        <div>
            <div>{productInfo}</div>
        </div>
    )
}

export default Product;