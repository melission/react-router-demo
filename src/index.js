import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import Category from './Category';
import Products from './Products';
import Product from './Product';
import Books from './category/Books';
import Book from "./category/Book";
import Factory from './Factory';
import Login from './login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "category/",
        element: <Category />,
      },
      {
        path: "products/",
        element: <Products />,
      },
      {
        path: "products/:productID/",
        element: <Product />,
      },
      {
        path: "category/books/",
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
        path: "login/",
        element: <Login />
      },

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
