import { Link, useRouteError } from "react-router-dom";
import errorImage from "./404.png"
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/esm/Col'
import Button from "react-bootstrap/esm/Button";
import './styles.css'

const storedMode = localStorage.getItem('colorMode')

const ErrorPage = () => {
    const error = useRouteError();
    let buttonTheme = storedMode === 'dark' ? 'outline-light' : "outline-dark"
    return (
        <Container style={{ backgroundColor: { storedMode } }}>
            <Row className="justify-content-center p-3">
                <h1>{error.statusText || error.meggase}</h1>
            </Row>
            <Row>
                <Col><img src={errorImage} alt="this is an error page"></img></Col>
                <Col>
                    <h2>Woah!</h2>
                    <p>Something unexpected happened, that's why we can't find the page you're looking for.</p>
                    <p>Sorry!</p>
                    <Row className="justify-content-center p-3">
                        <Button variant={buttonTheme}>
                            <Link
                                className="text-decoration-none"
                                style={{ color: "inherit" }}
                                to={`/`}>Main page</Link>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ErrorPage;