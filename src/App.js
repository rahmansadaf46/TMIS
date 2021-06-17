import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Batch from "./components/Batch/Batch";
import Header from "./components/Header/Header";
import AddBatch from './components/AddBatch/AddBatch';
import Course from './components/Course/Course';
import AddCourse from './components/AddCourse/AddCourse';
import CourseBatch from './components/CourseBatch/CourseBatch';
import NoMatch from './components/NoMatch/NoMatch';
import CourseUpdate from './components/CourseUpdate/CourseUpdate';
import BatchUpdate from './components/BatchUpdate/BatchUpdate';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [api] = useState('https://localhost:8080');
  return (
    <UserContext.Provider value={
      {
        user: [loggedInUser, setLoggedInUser],
        api: [api]
      }
    }>

      <Router >
        <Header />
        <Switch>

          <Route path="/course">
            <Course />
          </Route>
          <Route path="/batch">
            <Batch></Batch>
          </Route>
          <Route path="/addBatch">
            <AddBatch />
          </Route>

          <Route path="/addCourse">
            <AddCourse />
          </Route>
          <Route path="/courseUpdate/:id">
            <CourseUpdate />
          </Route>
          <Route path="/batchUpdate/:id">
            <BatchUpdate />
          </Route>
          <Route exact path="/">
            <Course />
          </Route>

          <Route path="/courseDetails/:id">
            <CourseBatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
