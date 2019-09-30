import React, { Component } from 'react'
import { BrowserRouter as Router, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// ? components
import NavBar  from "./components/layouts/NavBar";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import CreateCourse from "./components/CreateCourse";


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />

        <Route path="/" exact component={Dashboard} />
        <Route path="/user/create" component={CreateUser} />
        <Route path="/course/create" component={CreateCourse} />
      </Router>
    )
  }
}

export default App;