import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import './styles.css';

const columns = [
  { 
    id: 'fieldDisp',
    label: 'Field',
    borderRadius: "20px 0px 0px 0px"
  },
  { 
    id: 'number',
    label: 'Number',
    borderRadius: "0px 0px 0px 0px" },
  {
    id: 'name',
    label: 'Name',
    minWidth: 300,
    borderRadius: "0px 0px 0px 0px",
  },
  {
    id: 'creditMin',
    label: 'Min',
    align: 'right',
    borderRadius: "0px 0px 0px 0px",
  },
  {
    id: 'creditMax',
    label: 'Max',
    align: 'right',
    borderRadius: "0px 20px 0px 0px",
  },
];

const useStyles = makeStyles({
  container: {
    maxHeight: 600,
  },
  head: {
    color: "#494949",
    backgroundColor: "#dadfe1",
    fontWeight: "bolder",
    fontSize: "100%",
  },
  foot: {
    color: "#494949",
    backgroundColor: "#dadfe1",
    borderRadius: '0px 0px 20px 20px',
  },
  table: {
    backgroundColor: "#dadfe1",
    borderRadius: '20px',
  },
  tableBody: {
    backgroundColor: "#f7f7f7",
    color: "#494949",
  }
});

export function CourseTable(props) {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [courseList, setCourseList] = useState([])

  // const url = 'http://localhost:5000/' + props.type
  const courseType = props.type;
  useEffect(() => {
      axios.get('http://localhost:5000/' + courseType).then( (courses) => {
          setCourseList(courses.data);
          setLoading(false);
      } )
  }, [])

  if (isLoading) return <ReactLoading type={'spin'} color={"#494949"} height={75} width={75} />

  return (
    <Paper elevation={5} className="section" style={{ borderRadius: "20px"}}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="course table" className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, borderRadius: column.borderRadius }}
                  className={classes.head}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {courseList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={event =>  window.location.href=("courses/" + row._id)}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={courseList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className={classes.foot}
      />
    </Paper>
  );
}
