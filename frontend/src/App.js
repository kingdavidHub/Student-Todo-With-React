import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";



// ? components
import NavBar  from "./components/layouts/NavBar";
import Dashboard from "./components/Dashboard";
import CreateUser from "./components/CreateUser";
import CreateCourse from "./components/CreateCourse";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
      <Router>
          <NavBar />

          <Route path="/" exact component={Dashboard} />
          <Route path="/user/create" component={CreateUser} />
          <Route path="/course/create" component={CreateCourse} />
      </Router>
      </ApolloProvider>
    )
  }
}

export default App;