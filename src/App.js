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


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

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
          <Route path="/">
            <Batch></Batch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
