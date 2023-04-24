import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Category = () => (
  <div>
    <h2>Category</h2>
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

      {/* use *exact* otherwise all pathes starting with '/'' match */}
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/categpry"><Category></Category></Route>
        <Route path="/products"><Products></Products></Route>
      </Switch>
    </div>
  );
}

export default App;
