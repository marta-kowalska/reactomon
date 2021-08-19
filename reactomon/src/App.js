import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import PokemonList from "./Components/PokemonList";
import TypeList from "./Components/TypeList";
import Navbar from "./Components/Navbar";


export default function App() {
  return (
    <Router>
      <div className="App">
      <h1>Pokemon API</h1>
        <Navbar />
        <Switch>
          <Route path="/pokemons">
            <PokemonList />
          </Route>
          <Route path="/types">
            <TypeList />
          </Route>
          <Route path="/">
          <h2>Click above to see pokemons or pokemon types!</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
