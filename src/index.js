import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , ScrollRestoration} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import "./styles-global/main/main.scss";

import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter > 
    
      <React.StrictMode>
          <App />      
      </React.StrictMode>
    </BrowserRouter>
  

);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
