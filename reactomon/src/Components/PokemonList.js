import React from 'react';
import axios from 'axios';
import '../App.css'; 

export default class PokemonList extends React.Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        let temp;
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            temp = response.data.results;
        })
        .then(() => {
            // TODO: find another solution for image display
            for(let pokemon of temp){
                axios.get(pokemon.url)
                .then((res) => {
                    pokemon.image = res.data.sprites.front_default;
                    this.setState({ pokemons: temp });
                })
        }})
        }
    

    render() {
        return <div className="mini-card-wrapper">{this.state.pokemons.map(pokemon =>
             <div className="mini-card">
                 <p>{pokemon.name}</p>
                 <p><img src={pokemon.image} alt={pokemon.name}></img></p>
                 </div>)}</div>    }
}