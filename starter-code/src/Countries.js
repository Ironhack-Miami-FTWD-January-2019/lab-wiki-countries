import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'

class Countries extends Component {

  showCountries = () => { //looping through each of the countries from the state 
    let list = this.props.countries.map((eachCountry, i)=>{
      return (
        <li key={i}>
          <Link to={{  //Make a link 
            pathname:`/country/${eachCountry.cca3}`, //the url 
            // state: {eachCountry, countries} //the whole country object  
            }}>

            {eachCountry.name.common}
          </Link>
        </li>
      )
    })
    return list;
  }

  render() {
    return (
      <div className="Countries">
        We want a list of countries to click on
        {this.showCountries()}
      </div>
    );
  }
}

export default Countries;
