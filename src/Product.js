import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import image1 from "./shoes.png";
import image2 from "./sneakers.png";
import image3 from "./football-boots.png";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import Button from "react-bootstrap/Button";
import "./Product.css"
import {BreadcrumbProduct} from "./breadcrumbs";
import "./styles.css";

const Status = ({product}) => {
    if (product.status === "Available") {
        return (
            <Alert variant="success">
                <Alert.Heading>Available</Alert.Heading>
            </Alert>
        )
    } else {
        return (
            <Alert variant="danger">
                <Alert.Heading>Out of stock</Alert.Heading>
            </Alert>
        )
    }
}




const Product = ( ) => {
    const {productID} = useParams();
    const product = productData.find(p => p.id === Number(productID));
    // console.log(product.id)

    let productInfo;

    if (product) {
        productInfo = (
            // <div>
                
            //     <h3> {product.name} </h3>
            //     <p>{ product.description }</p>
            //     <hr></hr>
            //     <h4>{product.status}</h4>
            // </div

            <div class="product-body">
                <div className="product-main">
                    <h2>{product.name}</h2>
                    <Status product={product} />
                    <p class="product-desc">
                        {product.description}
                    </p>
                    <div className="carusel-wrapper">
                        <Carousel className="border" variant="dark">
                            <Carousel.Item>
                                <img
                                className="d-block w-90"
                                src={image1}
                                alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>{product.name} slide one</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-90"
                                src={image2}
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-90"
                                src={image3}
                                alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    } else {
        productInfo = <h2>Sorry. The product doesn't excist.</h2>
    }

    // let currentID = product.id
    // console.log("before return", currentID)
    return (
        <div>
            <div class="product-breadcrumbs">
                <BreadcrumbProduct current={productID}></BreadcrumbProduct>
            </div>
            <div>{productInfo}</div>
        </div>
    )
}

export default Product;