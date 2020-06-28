import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import { 
  First,
  WithParameter 
} from "./components";

const rootPage = document.getElementById('root')

ReactDOM.render(
  <div>
    <First></First>
    <WithParameter
    title = "Second Component"
    subtitle = "Enjoy your Life"
    />
  </div>, 
  rootPage);