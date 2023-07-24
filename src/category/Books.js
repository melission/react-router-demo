import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Outlet } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import {classicBooks} from "./bookList";
import "../styles.css";
  
const Books = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handleFirstPage = () => {
        setCurrentPage(1);

    }

    const handleLastPage = () => {
        setCurrentPage(Math.ceil(classicBooks.length / itemsPerPage))
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < Math.ceil(classicBooks.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedList = classicBooks.slice(startIndex, endIndex)

    return (
        <div>

            <h3 className="book-section_title">
            Welcome to our Book Section, where literary treasures await!
            </h3>
            <p className="book-section_description">
                Immerse yourself in the captivating world of classic literature with timeless masterpieces such as "Pride and Prejudice" by Jane Austen, 
                a tale of societal expectations and the transformative power of love. Experience the gripping narrative of "To Kill a Mockingbird" by Harper Lee, 
                which confronts themes of prejudice and injustice through the eyes of Scout Finch. Journey into the dystopian realm of "1984" by George Orwell, 
                a thought-provoking novel that delves into surveillance and the erosion of individual freedoms. Delight in the lyrical prose of "The Great Gatsby" by F. 
                Scott Fitzgerald, a shimmering exploration of the American Dream. Discover these iconic works and more, transporting yourself to literary realms that have shaped generations.
            </p>
            <Container className="container-body">

            <Row className="card-block">
                {paginatedList.map((book, index) => (
                <Card key={index} className="card-body p-0" border="light">
                    <Card.Body className="p-0">
                    <Card.Title className="text-center">{book.bookName}</Card.Title>
                    <Card.Text className="card-text">by {book.authorName}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Link href={`/category/books/${book.id}`}>See details</Card.Link>
                    </Card.Footer>
                </Card>
                ))}
            </Row>

            </Container>
            <Row className="pagination-block pagination mb-3">
            <Pagination >
                <Pagination.First className="pagination-element"  disabled={currentPage === 1} onClick={handleFirstPage} />
                <Pagination.Prev className="pagination-element"  disabled={currentPage === 1} onClick={handlePrevPage} />
                <Pagination.Item className="pagination-element_num" ><strong>{currentPage}</strong></Pagination.Item> 
                <Pagination.Next className="pagination-element"  disabled={currentPage === Math.ceil(classicBooks.length / itemsPerPage)} onClick={handleNextPage} />
                <Pagination.Last className="pagination-element" disabled={currentPage === Math.ceil(classicBooks.length / itemsPerPage)} onClick={handleLastPage} ></Pagination.Last>
            </Pagination>
            </Row>
            <Outlet />
        </div>
    );
};



export default Books