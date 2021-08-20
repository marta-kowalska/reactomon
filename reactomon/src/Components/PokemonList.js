import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import '../App.css'; 
import Card from './Card';

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
            setPokemons(response.data.results);
        })
    }, [])

    return (
    <div className="mini-card-wrapper">
    {pokemons.map(pokemon =>
        <Card item={pokemon} />)}
         </div>
         );
   
}