import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToggleColorMode from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Category from './category/Category';
import Products from './products/Products';
import Product from './products/Product';
import Books from './books/Books';
import Book from "./books/Book";
import Factory from './Factory';
import Login from './login/Login';
import IdeaGenerator from './leisureIdeas/IdeaGenerator';


const router = createBrowserRouter([
  {
    path: '/',
    element: <ToggleColorMode />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "category/",
        element: <Category />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productID",
        element: <Product />,
      },
      {
        path: "category/books",
        element: <Books />
      },
      {
        path: "category/books/:bookID",
        element: <Book />
      },
      {
        path: "factory",
        element: <Factory />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "ideas",
        element: <IdeaGenerator />
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
