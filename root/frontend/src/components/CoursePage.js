import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import { AddDelete } from './AddDelete';
import { Paper } from '@material-ui/core';
import { Error404 } from './Error404';

export function CoursePage() {

  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState()
  const params = useParams()

  useEffect(() => {
    axios.get('http://localhost:5000/courses/courseId/?courseId=' + params.courseId).then( (selectedCourse) => {
        setCourse(selectedCourse.data);
        setLoading(false);
    } )
  }, [params])

  if (isLoading) return <ReactLoading type={'spin'} color={"#494949"} height={75} width={75} />
  if (JSON.stringify(course) === 'null') return <Error404 />

  const credits = (course) => {
    if (course.creditMin === course.creditMax) return course.creditMin + ' credits';
    else return course.creditMin + ' to ' + course.creditMax + ' credits';
  }

  let items = []

  for (const [index, value] of course.fields.entries()) {
    items.push(
      <p style={{ fontWeight: "bold" }} key={index}>{value}</p>
    )
    items.push(
      <pre> | </pre>
    )
  }

  return (
    <div>
      <Paper elevation={5} className="section" style={{ borderRadius: "20px"}}>
        <div style={{ padding: "1%" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontWeight: "bolder", fontSize: "200%" }}>{course.name}</p>
            <AddDelete course={course}/>
          </div>
          <div style={{ display: "flex" }}>
            {items}
            <p>{course.number}</p>
          </div>
          <p>{credits(course)}</p>
          <p>{course.description}</p>
        </div>
      </Paper>
    </div>
  );
}
