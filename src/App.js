import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch,  BrowserRouter as Router } from "react-router-dom";
import InputPage from "./containers/InputPage";
import Home from './containers/Home';
import SignUp from './containers/SignUp';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/input" exact component={InputPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
