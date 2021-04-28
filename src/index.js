import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Viewport from "./Containers/Viewport/Viewport";
import './Theme/main.scss';

ReactDOM.render(
  <BrowserRouter>
      <Viewport />
  </BrowserRouter>,
  document.getElementById('root')
);