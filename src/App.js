import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import React from 'react';
import Sidebar from './components/site/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import { Col, Row } from 'reactstrap';
import MyWork from "./components/pages/MyWork";
import MyJourney from "./components/pages/MyJourney";
import ContactMe from "./components/pages/ContactMe";

function App() {
  return (
    <div id="App">
      <BrowserRouter>
      <div id="topTab"/>
      <Row id="mainRow">
        <Col md="2">
          <Sidebar/>
        </Col>
        <Col md="10">
          <Switch>
            <Route exact path="/"><Home className="content"/></Route>
            <Route exact path="/mywork"><MyWork className="content"/></Route>
            <Route exact path="/myjourney"><MyJourney className="content"/></Route>
            <Route exact path="/contactme"><ContactMe className="content"/></Route>
          </Switch>
        </Col>
      </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
