import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'; 

export default function Card(props) {
    const [image, setImage] = useState(null);

    useEffect(()=>{
        axios.get(props.item.url)
        .then(response => {
            setImage(response.data.sprites.front_default);
        })
    })
    
    return(
    <div className="mini-card">
        <p>{props.item.name}</p>
        <p><img src={image} alt={props.item.name}></img></p>
    </div>
    )

}