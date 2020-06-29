import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import {
  Random
} from "./components";

const rootPage = document.getElementById('root')

ReactDOM.render(
  <div>
    <Random
      min={1}
      max={100}
    />
  </div>,
  rootPage);