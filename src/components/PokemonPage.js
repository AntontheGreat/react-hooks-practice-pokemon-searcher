import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(setPokemons)
  }, [])

  const handleNewPoke = (shinyNewPoke) => {
    setPokemons([shinyNewPoke, ...pokemons]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPoke={handleNewPoke} />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
