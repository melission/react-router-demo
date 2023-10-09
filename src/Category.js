import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import bookImage from "./images/books/reading-book.png";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
// import { CategoryList } from "./CardFactory";

const storedMode = localStorage.getItem('colorMode')

const categoryList = ["books"]

const CardFactory = (categoryItem) => {
    // console.log(categoryItem)
    let cardBG = storedMode === 'dark' ? "secondary" : "transparent"
    let cardText = storedMode === "dark" ? "text-light" : "text-secondary"

    return (
        <Card className="card-body" variant={storedMode} border={storedMode} bg={cardBG} style={{ height: "400px" }}>
            <Card.Img variant="top" src={bookImage} />
            <Card.Body>
                <Card.Title>{categoryItem}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <Card.Link className={cardText}><Link className="text-decoration-none" style={{ color: "inherit" }} to={`/category/${categoryItem}/`}>See detailes</Link></Card.Link>
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