import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Context
// import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Components:
import Header from './components/Header';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import CourseDetail from './components/CourseDetail';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import UserSignOut from './components/UserSignOut';

// Stylesheets:

const App = () => {
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(res => res.json())
      .then(data => console.log(data));
  });

  return (
    <div className="App">
        <Header></Header>

        <Router>
          <Switch>
            <Route exact to="/" component={Courses} />
            <PrivateRoute path="/courses/create" component={CreateCourse} />
            <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
            <Route to="/courses/:id" component={CourseDetail} />
            <Route to="signin" component={UserSignIn} />
            <Route to="signup" component={UserSignUp} />
            <Route to="signout" component={UserSignOut} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
