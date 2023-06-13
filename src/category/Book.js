import React from "react";
import Container from "react-bootstrap/esm/Container";
import { classicBooks } from "./bookList";
import { useParams } from "react-router-dom";
import authors from "./authorList";
import "./books.css"
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button"

function getRandomRating(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Book = () => {

    //useParams fetches the route and returns an ID
    const {bookID} = useParams();
    const book = classicBooks.find(b => b.id === Number(bookID))
    const author = authors.find(author => author.name === String(book.authorName))
    const rating = getRandomRating(1, 5);
    const reviewNumber = Math.floor(Math.random() * 100);


    let bookInfo;

    if (book) {
        bookInfo = (
        <Container className="book-block" >

                <h1 className="book-block_title">{book.bookName}</h1>
                <h3 className="book-block_author">{book.authorName}</h3>
                <Row className="book-block_rating">
                <div>The book rating: <strong>{rating}</strong>, based on <strong>{reviewNumber}</strong> reviews.</div>
                <div>[all the numbers are generated randomly]</div>
                </Row>
                <Row>
                <p className="book-block_about-author">{author.description}</p>
                </Row>


        </Container>
    )} else {
        <Container>
                bookInfo = <div>Sorry, there seems to be a mistake in fetching a book. Try again, please</div>
        </Container>

    }
    return(
        <div>
            {bookInfo}
            <Button href="/category/books/">Back to catalogue</Button>
        </div>
        
    )
}

export default Book;