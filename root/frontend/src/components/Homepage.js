import React from 'react';
import '../index.css';
import { CourseTable } from './CourseTable';

export function Homepage() {
    return(
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <CourseTable type={'courses'}/>
      </div>
    </div>
)};