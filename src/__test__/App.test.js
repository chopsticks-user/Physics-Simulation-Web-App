import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import App from "../App.js"
// import '@testing-library/jest-dom/extend-expect';
// import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers.js';

it('app rendered', () => {
  render(<App />);
  // const space = document.querySelector("#space");
  // toBeInTheDocument(space);
});