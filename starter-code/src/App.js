import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Countries from './Countries.js'
import countries from './countries.json'
import CountryDetail from './CountryDetail.js'


class App extends Component {
  state = {
    countries
  }
  render() {
    return (
      <div className="App">
          <Switch>
            {/* <Route exact path="/country/:id" component={CountryDetail} /> */}
            <Route 
              exact path="/country/:id" 
              component={(props) => <CountryDetail {...props} {...this.state}/>} />

          </Switch>
          <Countries {...this.state} /> 

      </div>
    );
  }
}

export default App;
