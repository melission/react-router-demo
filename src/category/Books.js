import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Outlet } from "react-router-dom";
import { CategoryItem } from "../CardFactory";
import Pagination from "react-bootstrap/Pagination";
import classicBooks from "./bookList";
import "../styles.css";
  
const Books = () => {

    const [currentPage, setCurrentPage] = useState(1);

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
            <Container>
                
            <Row className="card-block">
                {paginatedList.map((book, index) => (
                <Card key={index} className="card-body" border="light" style={{ height: "400px" }}>
                    <Card.Body>
                    <Card.Title>{book.bookName}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Card.Link href={`/category/books/${book.id}`}>See details</Card.Link>
                    </Card.Footer>
                </Card>
                ))}
            </Row>
            <Row className="pagination-block mb-3">
            <Pagination >
                <Pagination.Prev className="pagination-element" onClick={handlePrevPage} />
                <Pagination.Item className="pagination-element" >{currentPage}</Pagination.Item> 
                <Pagination.Next className="pagination-element" onClick={handleNextPage} />
            </Pagination>
            </Row>
            </Container>
            <Outlet />
        </div>
    );
};



export default Books