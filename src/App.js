import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Category from './Category';
import Products from "./Products";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <head>
      <link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
      crossorigin="anonymous"></link>
      </head>
      {/* <nav className='navbar navbar-light'> */}
        <ul className='nav justify-content-center bg-light'>
          <li className='nav-item'>
            <a className='nav-link mt-0' >
              <Link to={`/`}>Home</Link>
            </a>
          </li>
            <li className='nav-item'>          
              <a className='nav-link'>
                <Link to={`category/`}>Category</Link>
              </a>            
          </li>
            <li className='nav-item'>
              <a className='nav-link'>
                <Link to={`products/`}>Products</Link>
              </a>
            </li>
        </ul>
      {/* </nav> */}
      <h2>the end of root page</h2>
      <Outlet />
      {/* use *exact* otherwise all pathes starting with '/'' match
      <Routes>
        <Route exact path="/"><Home /></Route>
        <Route path="/categpry"><Category /></Route>
        <Route path="/products"><Products /></Route>
      </Routes> */}

      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="category/*" element={<Category />}></Route>
        <Route path="products/*" element={<Products />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
