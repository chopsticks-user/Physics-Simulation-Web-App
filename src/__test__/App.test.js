import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import App from "../App.js"
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers.js';

it('app rendered', () => {
  render(<App />);
  // const space = document.querySelector("#space");
  // toBeInTheDocument(space);
});