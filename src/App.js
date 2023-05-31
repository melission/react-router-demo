import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Category from './Category';
import Products from "./Products";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap" rel="stylesheet" />

      <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
      crossorigin="anonymous"></link>
      </head>

      <Navbar bg="light"  variant="light">
        <Container>
          <Navbar.Brand href={`/`}>Basic Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`/category/`}>Category</Nav.Link>
            <Nav.Link href={`/products/`}>Products</Nav.Link>
            <Nav.Link href={`/factory/`}>Factory</Nav.Link>
            <Nav.Link href={`/login/`} >Log in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />

      </div>
  );
}

export default App;
