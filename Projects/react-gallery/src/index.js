import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SideBar from './components/SideBar/sidebar';
import Gallery from './components/Gallery/gallery';

ReactDOM.render(
  <React.StrictMode>
    <>
    <SideBar/>
    <Gallery/>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
