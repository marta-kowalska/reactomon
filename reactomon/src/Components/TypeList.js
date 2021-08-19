import React from 'react';
import axios from 'axios';

export default class TypeList extends React.Component {
    state = {
        types: []
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/type')
        .then(response => {
            this.setState({ types: response.data.results });
        })
    }

    render() {
        return <div>{this.state.types.map(type => <p>{type.name}</p>)}</div>    }
}