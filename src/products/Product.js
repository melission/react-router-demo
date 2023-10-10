import React from "react";
import { useParams } from "react-router-dom";
import productData from "./productData";
import productImage from "./productImageLink";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';
import "./Product.css"
import { BreadcrumbProduct } from "../breadcrumbs";
import "../styles.css";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";

const storedMode = localStorage.getItem('colorMode')

const Status = ({ product }) => {
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


const Product = () => {
    const { productID } = useParams();
    const product = productData.find(p => p.id === Number(productID));
    const { images } = productImage.find(p => p.id === Number(productID))
    // console.log('image', images)

    let productInfo;

    if (product) {
        productInfo = (
            <div className="product-body">
                <Container className="product-main" fluid>
                    <Row className="justify-content-md-center">
                        <h2>{product.name}</h2>
                        <Status product={product} />
                    </Row>
                    <Row>
                        <Col>
                            <div className="carusel-wrapper">
                                <Carousel className="border" variant="dark">
                                    {images.map((image) => {
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-90"
                                                    src={image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>)
                                    })}
                                </Carousel>
                            </div>
                        </Col>
                        <Col>
                            <p className="product-desc">
                                {product.description}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    } else {
        productInfo = <h2>Sorry. The product doesn't excist.</h2>
    }
    return (
        <div>
            <div className="product-breadcrumbs">
                <BreadcrumbProduct variant={storedMode} current={productID}></BreadcrumbProduct>
            </div>
            <div>{productInfo}</div>
        </div>
    )
}

export default Product;