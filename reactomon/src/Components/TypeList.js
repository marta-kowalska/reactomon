import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
            {types.map(type => <div className="mini-card">{type.name}</div>)}
        </div>
    )
}