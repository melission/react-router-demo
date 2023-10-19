import React from "react";
import Container from "react-bootstrap/esm/Container";
import { classicBooks } from "./bookList";
import { useParams } from "react-router-dom";
import authors from "./authorList";
import "./book.css"
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button"
import error404 from "../images/404.png"
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

function getRandomRating(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Book = () => {
    const { bookID } = useParams();
    const book = classicBooks.find(b => b.id === Number(bookID))
    const author = authors.find(author => author.name === String(book?.authorName))
    const rating = getRandomRating(1, 5);
    const reviewNumber = Math.floor(Math.random() * 100);
    let bookInfo;
    if (author) {
        bookInfo = (
            <Container className="book-block" >
                <h1 className="book-block_title">{book.bookName}</h1>
                <h3 className="book-block_author">{book.authorName}</h3>
                <Row className="book-block_rating">
                    <div>The book rating: <Rating style={{ margin: "10px" }} name="read-only" value={rating} readOnly /> based on <strong>{reviewNumber}</strong> reviews.</div>
                    <div>[all the numbers are generated randomly]</div>
                </Row>
                <Row>
                    <p className="book-block_about-author">{author.description}</p>
                </Row>
            </Container>
        )
    } else {
        bookInfo = <Container className="error-block">
            <Row>
                <div className="error-text">Sorry, there seems to be a mistake in fetching a book. Try again, please</div>
            </Row>
            <Row>
                <img className="error-image" src={error404} alt='no book of your request was found'></img>
            </Row>
        </Container>

    }
    return (
        <div>
            {bookInfo}
            <p className="book-block_return-button mx-auto">
                <Link
                    className="text-decoration-none"
                    style={{ color: "inherit" }}
                    to={"/category/books/"}>
                    <Button className="mx-auto">Back to catalogue</Button>
                </Link>
            </p>
        </div>

    )
}

export default Book;