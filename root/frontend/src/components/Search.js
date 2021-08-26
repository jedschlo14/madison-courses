import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import './styles.css';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const Container = styled.div`
 text-align: center;
 margin-top: 5%;
`;

const useStyles = makeStyles({
  root: {
    background: '#0479a8',
    color: '#f7f7f7',
    borderRadius: 100,
    height: 48,
    margin: '0 auto',
    boxShadow: '0 3px 5px 2px #b0b0b0',
  },
  textField: {
    width: '90%',
    height: '10%',
    margin: 'auto',
  },
  slider: {
    width: 300,
  },
});

export function Search() {
  const classes = useStyles();

  const [value, setValue] = useState({
    keywords: '',
    minCredits: '',
    maxCredits: '',
  })

  const [creditRange, setCreditRange] = useState([44, 0])
  const [isLoading, setLoading] = useState(true);
  const [fieldList, setFieldList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/fields').then( (allFields) => {
        setFieldList(allFields.data);
        setLoading(false);
    } )
}, [])

  function updateCreditRange() {
    setCreditRange([(isNaN(value.maxCredits)) ? 44 : value.maxCredits, (isNaN(value.minCredits)) ? 0 : value.minCredits])
  }

  function handleChange(event) { 
    const {id, value} = event.target;

    updateCreditRange();

    setValue(prevInput => {
      return {
        ...prevInput,
        [id]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(value);
  }
  if (isLoading) {
    return <ReactLoading type={'spin'} color={"#494949"} height={75} width={75} />
  }

  return (
    <Paper elevation={5} className="section" style={{ borderRadius: "25px", background: "#f7f7f7", height: 300, width: 300 }}>
        <form noValidate autoComplete="off">
          <Container>
            <Button
            onClick={handleClick}
            classes={{ root: classes.root }}
            className="button"
            variant="contained"
            disableElevation
            endIcon={<SearchIcon />}
            >Filter Results</Button>
          </Container>
          <Container>
            <TextField
            id="keywords"
            value={value.keywords}
            label="Keywords"
            onChange={handleChange}
            className={ classes.textField }
            variant="outlined"
            />
          </Container>
          <Container>
            <Autocomplete
            id="fields"
            onChange={handleChange}
            options={fieldList}
            getOptionLabel={(option) => option.header}
            className={ classes.textField }
            renderInput={(params) => <TextField {...params} label="Field" variant="outlined" />}
            />
          </Container>
          <Container>
            <TextField
            id="minCredits"
            value={value.minCredits}
            label="Min Credits"
            onChange={handleChange}
            InputProps={{ inputProps:{ min: 0, max: creditRange[0] } }}
            className={ classes.textField }
            style={{ width: '42.5%', marginRight: '2.5%' }}
            type="number"
            variant="outlined"
            />
            <TextField
            id="maxCredits"
            value={value.maxCredits}
            label="Max Credits"
            onChange={handleChange}
            InputProps={{ inputProps: { min: creditRange[1], max: 44 } }}
            className={ classes.textField }
            style={{ width: '42.5%', marginLeft: '2.5%' }}
            type="number"
            variant="outlined" />
          </Container>
        </form>
    </Paper>
  );
}
