import React, {useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; 
import { Link } from "react-router-dom";


export default function Card(props) {
    const [image, setImage] = useState(null);
    const [pokemonData, setData] = useState([]);

    useEffect(()=>{
        axios.get(props.item.url)
        .then(response => {
            setImage(response.data.sprites.front_default);
            setData(response.data);
        }, [])
    })
    
    return(
    <div className="mini-card"><Link to={{
        pathname: '/pokemon-details', 
        pokemonData}
    }>
        <p>{props.item.name}</p>
        <p><img src={image} alt={props.item.name}></img></p>
        </Link>
        </div>
      
    )

}