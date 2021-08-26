import React, { useState } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles({
    icon: {
      color: "#0479a8",
      fontSize: "400%"
    }
  });

const changeSaveStatus = (courseId, courseIsSaved) => {
    const params =  {
        "id": parseInt(courseId),
        "bool": !courseIsSaved
    }
    axios.put('http://localhost:5000/saved-courses', params)
}

export function AddDelete(props) {
    const classes = useStyles();
    const [method, changeMethod] = useState(props.course.isSaved);

    return (
        <div>
            <Button style={{borderRadius: "50%"}} onClick={() => {changeSaveStatus(props.course._id, props.course.isSaved); changeMethod(!props.course.isSaved);}}>
                {method ?  <DeleteIcon className={classes.icon} /> : <FavoriteIcon className={classes.icon} />}
            </Button>
        </div>
    );
}