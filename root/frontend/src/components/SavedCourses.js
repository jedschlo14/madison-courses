import React from 'react';
import '../index.css';
import { CourseTable } from './CourseTable';

export function SavedCourses() {
    return(
    <div style={{ backgroundColor: "#f7f7f7", height: "100vh"}}>
      <div style={{display: "flex", justifyContent: "center"}}>
        <CourseTable type={'saved-courses'}/>
      </div>
    </div>
)};