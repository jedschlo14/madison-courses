import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/Header';
import { CourseTable } from './components/CourseTable';
import { Search } from './components/Search';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ backgroundColor: "#f7f7f7", height: "100vh"}}>
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        <Search />
        <CourseTable />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
