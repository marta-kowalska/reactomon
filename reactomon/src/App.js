import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <nav>
            <Link to="/pokemons" className="App-linkButton">Pokemons</Link>
            <Link to="/types" className="App-linkButton">Types</Link>         
        </nav>

        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
          <Route path="/types">
            <Types />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Pokemons() {
  return <h2>List of all pokemons</h2>;
}

function Types() {
  return <h2>List of pokemon types</h2>;
}

function Header() {
  return <h1>Pokemon API</h1>;
}