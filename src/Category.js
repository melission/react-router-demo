import React from "react";
import {Outlet} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import bookImage from "./images/books/reading-book.png";
// import { CategoryList } from "./CardFactory";


const categoryList = ["books"]

const CardFactory = (categoryItem) => {
    // console.log(categoryItem)
    return(
        <Card className="card-body" border="light" style={{ height: "400px" }}>
            <Card.Img variant="top" src={bookImage} />
            <Card.Body>
                <Card.Title>{categoryItem}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link href={`/category/${categoryItem}/`}>See detailes</Card.Link>
            </Card.Footer>
        </Card>
    )
}

const Category = () => {
    // const categories = categoryList.map(category => CategoryList(category, ))
    const categories = CardFactory(categoryList)
    return (
        <div>
            {/* <BreadcrumbCategory></BreadcrumbCategory> */}
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