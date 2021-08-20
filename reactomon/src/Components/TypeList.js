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
        return <div className="mini-card-wrapper">{this.state.types.map(type => <div className="mini-card">{type.name}</div>)}</div>    }
}