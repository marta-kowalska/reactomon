import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

    render() {
        return (<nav>
        <Link to="/pokemons" className="App-linkButton">Pokemons</Link>
        <Link to="/types" className="App-linkButton">Types</Link>         
    </nav>)   
    }
}