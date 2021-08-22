import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { capitalize } from './PokemonDetails';

export default function TypeList() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then(response => {
            setTypes(response.data.results);
        })
    }, [])

    return (
        <div className="mini-card-wrapper">
            {types.map(type => <div className="mini-card" key={type.name}>{capitalize(type.name)}</div>)}
        </div>
    )
}