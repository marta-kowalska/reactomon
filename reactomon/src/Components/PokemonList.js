import React from 'react';
import axios from 'axios';
import '../App.css'; 
import Card from './Card';

export default class PokemonList extends React.Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            this.setState({ pokemons: response.data.results });
        })
        }
    

    render() {
        return <div className="mini-card-wrapper">
            {this.state.pokemons.map(pokemon =>
                <Card item={pokemon} />)}
                 </div>    }
}