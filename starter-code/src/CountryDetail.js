import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

//OPTION 3 
function CountryDetail(props){ //stateless 
        console.log(props)
        let currentCountry = props.countries.find((eachCountry)=>{ //loops through all countries until it finds a country wher teh cca3 matches the url             
           return eachCountry.cca3 === props.match.params.id //this is the url 
        })

        let { name, region, area, capital, flag, borders} = currentCountry //Spread operator that deconstructs all the values

        let allTheBorders = borders.map(((border,i)=>{ //Loops through borders
            return <ol key={i}>Border's with <Link to={`/country/${border}`}>{border}</Link></ol>
        }))       
        return (
            <div className="CountryDetail">
                {name.common} {flag} 
                <div> {region} {area} {capital[0]} </div>
                {allTheBorders}
            </div>
        );
}

export default CountryDetail;




//OPTION 2 
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';

// const CountryDetail = (props) => { //stateless 
//         let { name, region, area, capital, flag, borders} = props.location.state.eachCountry //Spread operator that deconstructs all the values
//         let allTheBorders = borders.map((border=>{ //Loops through borders
//             return <ol>Border's with  {border}</ol>
//         }))
        
//         return (
//             <div className="CountryDetail">
//                 {name.common} {flag} 
//                 <div> {region} {area} {capital[0]} </div>
//                 {allTheBorders}
//             </div>
//         );
// }

// export default CountryDetail;




















//OPTION 1 s

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import countries from './countries.json' //This is a static document. It should be in the state 

// class CountryDetail extends Component {
//     render() {
//         let currentCountry = countries.find((eachCountry)=>{ //loops through all countries until it finds a country wher teh cca3 matches the url 
            
//             return eachCountry.cca3 === this.props.match.params.id //this is the url 
//         })
//         console.log(currentCountry)

//         return (
//             <div className="CountryDetail">
//                 {currentCountry.name.common}
//                 {currentCountry.flag}
//             </div>
//         );
//     }
// }

// export default CountryDetail;
