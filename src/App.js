import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Category from './Category'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      {/* use *exact* otherwise all pathes starting with '/'' match
      <Routes>
        <Route exact path="/"><Home /></Route>
        <Route path="/categpry"><Category /></Route>
        <Route path="/products"><Products /></Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="category/" element={<Category />}></Route>
        <Route path="products/" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
