import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <nav>
            <button><Link to="/pokemons">Pokemons</Link></button>
            <button><Link to="/types">Types</Link></button>           
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
  return <h1>This is header of the page</h1>;
}