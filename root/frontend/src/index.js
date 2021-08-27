import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CoursePage } from './components/CoursePage.js';
import { Homepage } from './components/Homepage.js';
import { Header } from './components/Header.js';
import { SavedCourses } from './components/SavedCourses.js';
import { Error404 } from './components/Error404.js';

ReactDOM.render(
    <Router>
        <Header/>
        <Switch>
		        <Route exact path="/" component={Homepage}/>
			    <Route exact path="/courses/:courseId" component={CoursePage} />
			    <Route exact path="/saved-courses" component={SavedCourses} />
                <Route component={Error404} />
	    </Switch>
    </Router>,
    document.getElementById('root')
);