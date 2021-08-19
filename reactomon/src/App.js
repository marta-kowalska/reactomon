import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import PokemonList from "./Components/PokemonList";
import TypeList from "./Components/TypeList";


export default function App() {
  return (
    <Router>
      <div className="App">
      <h1>Pokemon API</h1>
        <nav>
            <Link to="/pokemons" className="App-linkButton">Pokemons</Link>
            <Link to="/types" className="App-linkButton">Types</Link>         
        </nav>

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
