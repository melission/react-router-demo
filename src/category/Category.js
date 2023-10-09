import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

const storedMode = localStorage.getItem('colorMode')

const categoryList = ["books"]

const CardFactory = (categoryItem) => {
    let cardText = storedMode === "dark" ? "text-light" : "text-secondary"
    return (
        <Card
            className="card-body"
            variant={storedMode}
            border={storedMode}
            bg={'transparent'}
            style={{ height: "400px" }}>
            <Card.Body>
                <Card.Title>{categoryItem}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link className={cardText}>
                    <Link
                        className="text-decoration-none"
                        style={{ color: "inherit" }}
                        to={`/category/${categoryItem}/`}>See detailes
                    </Link>
                </Card.Link>
            </Card.Footer>
        </Card>
    )
}

const Category = () => {
    const categories = CardFactory(categoryList)
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