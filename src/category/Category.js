import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import categoryImage from "./categoryList";

const storedMode = localStorage.getItem('colorMode')

const CardFactory = (categoryImage) => {
    let cardText = storedMode === "dark" ? "text-light" : "text-secondary"
    const categoryList = categoryImage.map((categoryItem) => {
        return (
            <Card
                className="card-body"
                variant={storedMode}
                border={storedMode}
                bg={'transparent'}
                style={{ height: "400px" }}>
                <Card.Img variant="top" src={categoryItem.image} />
                <Card.Body>
                    <Card.Title>{categoryItem.name}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <Card.Link className={cardText}>
                        <Link
                            className="text-decoration-none"
                            style={{ color: "inherit" }}
                            to={`/category/${categoryItem.name}/`}>See detailes
                        </Link>
                    </Card.Link>
                </Card.Footer>
            </Card>
        )
    })
    return categoryList

}

const Category = () => {
    const categories = CardFactory(categoryImage)
    return (
        <div>
            <Container>
                <Row>
                    {categories}
                </Row>
            </Container>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default Category;