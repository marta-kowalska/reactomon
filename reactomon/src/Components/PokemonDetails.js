import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import '../App.css'; 

import { useLocation, useParams } from 'react-router-dom';

export default function PokemonDetails() {
    const location = useLocation();
    const { handle } = useParams();
    const [image, setImage] = useState(null);
    const [types, setTypes] = useState([]);
    const [thisData, setPokemonData] = useState([]);

    useEffect(()=>{
        if(location.pokemonData){
            setPokemonData(location.pokemonData);
            setImage(location.pokemonData.sprites.front_default)
            setTypes(getTypes(location.pokemonData.types));
        } else {
    
        axios.get(`https://pokeapi.co/api/v2/pokemon/${handle}/`)
            .then(response => {
                setPokemonData(response.data);
                setImage(response.data.sprites.front_default)
                setTypes(getTypes(response.data.types));
            })
        }
    
        }, [handle])

    const getTypes = (arr) => {
        let allTypes = ""
        for(let item of arr){
            allTypes = allTypes.concat(' ', item.type.name);
        }
        return allTypes;
    }

    return (<div>
        <h2>{thisData.name}</h2>
        <img src={image} alt={thisData.name}></img>
        <p>Types: {types}</p>
  
        </div>);


   
}