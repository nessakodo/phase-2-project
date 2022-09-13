// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './compmonents/App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );


import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './compmonents/App';


import './index.css';
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);