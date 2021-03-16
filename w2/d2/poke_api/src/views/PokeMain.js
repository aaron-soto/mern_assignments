import React, { useEffect, useState } from "react";

import axios from "axios";

const PokeMain = (props) => {
  const [allPokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=1000")
      .then((res) => {
        console.log(res.data.results);
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pokeList = allPokemon.map((result, i) => {
    return <li key={i}>{result.name}</li>;
  });

  return (
    <div>
      <h2>Pokemon</h2>
      {pokeList}
    </div>
  );
};

export default PokeMain;
