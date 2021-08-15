import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowCourse() {
  const classes = useStyles();

  const [coursesList, setCourseList] = useState([])

  useEffect(() => {
      axios.get('http://localhost:5000/courses').then( (allCourses) => {
          setCourseList(allCourses.data);
      } )
  }, [])

  return (
    <>
    <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Field</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coursesList.map((course, key) => (
            <TableRow key={key}>
              <TableCell align="right">{course.fields}</TableCell>
              <TableCell align="right">{course.number}</TableCell>
              <TableCell align="right">{course.name}</TableCell>
              <TableCell align="right">{course.minCredits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
