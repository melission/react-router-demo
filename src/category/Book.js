import React from "react";
import Container from "react-bootstrap/esm/Container";
import { classicBooks } from "./bookList";
import { useParams } from "react-router-dom";
import "./books.css"

function getRandomRating(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Book = () => {

    //useParams fetches the route and returns an ID
    const {bookID} = useParams();
    const book = classicBooks.find(b => b.id === Number(bookID))
    const rating = getRandomRating(1, 5);
    const reviewNumber = Math.floor(Math.random() * 100);


    let bookInfo;

    if (book) {
        bookInfo = (
        <Container >

                <h1>{book.bookName}</h1>
                <h3>{book.authorName}</h3>
                <p>The book rating: {rating} based on {reviewNumber} reviews. </p>
                <div>[all the numbers are generated randomly]</div>


        </Container>
    )} else {
        <Container>
                bookInfo = <div>Sorry, there seems to be a mistake in fetching a book. Try again, please</div>
        </Container>

    }
    return(
        <div>
            {bookInfo}
        </div>
    )
}

export default Book;