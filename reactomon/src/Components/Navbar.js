import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const LinkButton = styled.button`
    text-decoration: none;
    padding: 10px;
    margin: 20px;
    background-color: goldenrod;
    border: none;
    &:visited{
        color: black;
    }
    &:hover{
        background-color:black;
  	color: goldenrod;
    }
`

export default function Navbar() {

        return (<nav>
        <Link to="/pokemons"><LinkButton>Pokemons</LinkButton></Link>
        <Link to="/types"><LinkButton>Types</LinkButton></Link>         
    </nav>)   
}