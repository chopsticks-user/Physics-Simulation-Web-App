import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from "../App.js"

it('app rendered', () => {
  render(<App />);
  expect(screen.getByText("11111")).toBeInTheDocument();
});