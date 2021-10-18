import React from "react";
import Sidebar from "./components/Sidebar.js";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sidebar">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 main">
              <Navbar />
              <br />
              <br />
              <br />
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/projects">
                  <Project />
                </Route>
                <Route path="/skills">
                  <Resume />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
