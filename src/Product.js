import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import image1 from "./shoes.png";
import image2 from "./sneakers.png";
import image3 from "./football-boots.png";
import Carousel from 'react-bootstrap/Carousel';

const Product = ( ) => {
    const {productID} = useParams();
    const product = productData.find(p => p.id === Number(productID));
    console.log(product)

    let productInfo;

    if (product) {
        productInfo = (
            // <div>
                
            //     <h3> {product.name} </h3>
            //     <p>{ product.description }</p>
            //     <hr></hr>
            //     <h4>{product.status}</h4>
            // </div>
            <div>
                <h2>{product.name}</h2>
                <h3></h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-30"
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
                        className="d-block w-30"
                        src={image2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-30"
                        src={image3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
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