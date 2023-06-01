import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders navbar with correct links', () => {
    render(<App />);

    const homeLink = screen.getByText('Basic Page');
    const categoryLink = screen.getByText('Category');
    const productsLink = screen.getByText('Products');
    const factoryLink = screen.getByText('Factory');
    const loginLink = screen.getByText('Log in');

    expect(homeLink.getAttribute('href')).toBe('/');
    expect(categoryLink.getAttribute('href')).toBe('/category/');
    expect(productsLink.getAttribute('href')).toBe('/products/');
    expect(factoryLink.getAttribute('href')).toBe('/factory/');
    expect(loginLink.getAttribute('href')).toBe('/login/');
  });


});
