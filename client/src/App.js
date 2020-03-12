import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
// import Product from "./pages/Product";
import Books from "./components/pages/Books"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/books" component={Books} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
