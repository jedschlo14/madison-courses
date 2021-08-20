import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CoursePage } from './components/CoursePage.js';
import { Homepage } from './components/Homepage.js';

ReactDOM.render(
    <Router>
        <Switch>
		        <Route exact path="/" component={Homepage}/>
			    <Route exact path="/courseId=:id" component={CoursePage} />
	    </Switch>
    </Router>,
    document.getElementById('root')
);