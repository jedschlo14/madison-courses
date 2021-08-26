import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CoursePage } from './components/CoursePage.js';
import { Homepage } from './components/Homepage.js';
import { Header } from './components/Header.js';

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
		        <Route exact path="/" component={Homepage}/>
			    <Route exact path="/courses/:courseId" component={CoursePage} />
	    </Switch>
    </Router>,
    document.getElementById('root')
);