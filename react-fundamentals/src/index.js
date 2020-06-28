import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import { First } from "./components";

const rootPage = document.getElementById('root')

ReactDOM.render(
  <div>
    <First></First>
  </div>, 
  rootPage);