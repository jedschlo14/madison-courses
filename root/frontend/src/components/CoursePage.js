import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import axios from 'axios';
import './styles.css';


import Button from '@material-ui/core/Button';

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
//   }
// });

const changeSaveStatus = (id, trueFalse) => {
  const params =  {
    "id": parseInt(id),
    "bool": trueFalse
  }
  axios.put('http://localhost:5000/saved-courses', params)
}

export function CoursePage() {
  // const classes = useStyles();

  const [isLoading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:5000/courses').then( (allCourses) => {
        setCourseList(allCourses.data);
        setLoading(false);
    } )
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }
    
  const course = courseList[parseInt(id)]

  return (
    <div>
      {console.log(id)}
      {console.log(courseList[parseInt(id)])}
      <p>{course.fieldDisp}</p>
      <p>{course.number}</p>
      <p>{course.name}</p>
      <p>{course.creditMin}</p>
      <p>{course.creditMin}</p>
      <p>{course.desc}</p>
      <Button variant="contained" color="primary" onClick={() => changeSaveStatus(id, true)}>
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={() => changeSaveStatus(id, false)}>
        Remove
      </Button>
    </div>
  );
}
