import React from 'react';
import '../index.css';
import { Header } from './Header';
import { CourseTable } from './CourseTable';
import { Search } from './Search';

export function Homepage() {
    return(
    <div style={{ backgroundColor: "#f7f7f7", height: "100vh"}}>
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        <Search />
        <CourseTable />
      </div>
    </div>
)};