import React from "react";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import "./styles.css"
import { CatalogList } from "./CardFactory";

const Factory = () => {
    const catalogList = ["products", "category", "ideas"]

    return (
        <Container>
            <Row>
                <CatalogList catalogList={catalogList} />
            </Row>
        </Container>
    )

}



export default Factory;