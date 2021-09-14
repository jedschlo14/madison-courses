import React from 'react';
import '../index.css';
import { CourseTable } from './CourseTable';

export function SavedCourses() {
    return(
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <CourseTable type={'saved-courses'}/>
      </div>
    </div>
)};