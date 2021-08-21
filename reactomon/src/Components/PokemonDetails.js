import React  from 'react';

import '../App.css'; 

import { useLocation } from 'react-router-dom';

export default function PokemonDetails() {
    const location = useLocation();
    const pokemonData = location.pokemonData;


    const getTypes = () => {
        let allTypes = ""
        for(let item of pokemonData.types){
            allTypes = allTypes.concat(' ', item.type.name);
        }
        return allTypes;
    }

    return (<div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.front_default} alt={pokemonData.name}></img>
        <p>Types: {getTypes()}</p>
        </div>);
   
}