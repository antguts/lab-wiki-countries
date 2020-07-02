import React, { Component } from 'react';
import countries from './countries.json';
import Country from './components/CountriesList.js'
import Navbar from './Navbar.js'
import { Link } from 'react-router-dom';


class App extends Component {

  displayCountries=()=>{
    return countries.map((eachCountry)=>{
      return(
        <Link class="list-group-item list-group-item-action" to={`${eachCountry.cca2}`}>
          <img src={"https://www.countryflags.io/"+eachCountry.cca2+"/flat/64.png"}/> 
          {eachCountry.name.common}</Link>
        );
    });
  }


  render() {
    return (
      <div>
        <Navbar />
        <Country />
        <div className="container">
          <div className="row">
            <div className="col-5" >
              <div className="list-group">
                {this.displayCountries()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;