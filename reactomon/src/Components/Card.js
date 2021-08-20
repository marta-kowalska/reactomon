import React from 'react';
import axios from 'axios';
import '../App.css'; 

export default class Card extends React.Component {
    state = {
        image: null,
        fullData: []
    }

    componentDidMount(){
        axios.get(this.props.item.url)
        .then(response => {
            this.setState({ image: response.data.sprites.front_default });
            this.setState({ fullData: response.data });
        })
        }
    

    render() {
        return(<div className="mini-card">
        <p>{this.props.item.name}</p>
        <p><img src={this.state.image} alt={this.props.item.name}></img></p>
        </div>)
             }
}