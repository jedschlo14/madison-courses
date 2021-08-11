import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
