import React from 'react';
import axios from 'axios';

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
        return <div>{this.state.pokemons.map(pokemon => <p>{pokemon.name}</p>)}</div>    }
}