import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
// import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import { AddDelete } from './AddDelete';

// const useStyles = makeStyles({
//   container: {
//     maxHeight: 600,
//   },
//   head: {
//     color: "#494949",
//     backgroundColor: "#dadfe1",
//     fontWeight: "bolder",
//     fontSize: "100%",
//   },
//   foot: {
//     color: "#494949",
//     backgroundColor: "#dadfe1",
//     borderRadius: '0px 0px 20px 20px',
//   },
//   table: {
//     backgroundColor: "#dadfe1",
//     borderRadius: '20px',
//   },
//   tableBody: {
//     backgroundColor: "#f7f7f7",
//     color: "#494949",
//   },
//   icon: {
//     color: "#0479a8",
//     fontSize: "400%"
//   }
// });

export function CoursePage() {
  // const classes = useStyles();

  const [isLoading, setLoading] = useState(true);
  const [course, setCourse] = useState()
  // const { courseId } = useParams()

  // const url = 'http://localhost:5000/courses/courseId/?courseId=' + courseId;

  useEffect(() => {
    axios.get('http://localhost:5000/courses/courseId/?courseId=' + useParams).then( (selectedCourse) => {
        setCourse(selectedCourse.data);
        setLoading(false);
    } )
  }, [])
  
  if (isLoading) {
    return <ReactLoading type={'spin'} color={"#494949"} height={75} width={75} />
  } 

  return (
    <div>
      <p>{course.fieldDisp}</p>
      <p>{course.number}</p>
      <p>{course.name}</p>
      <p>{course.creditMin}</p>
      <p>{course.creditMin}</p>
      <p>{course.description}</p>
      <AddDelete course={course}/>
    </div>
  );
}
