import React, { useState, useEffect } from "react";
import axios from "axios";

const Whatever = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {

      setData(res.data);
    });

  }, []);

  return ( <div>
      {
   data?.abilities.map( (pokemonAbility) => {
    return (
        <p key={pokemonAbility.slot}>{pokemonAbility.ability.name}</p>
    )
    })


      }
  </div>);
};

export default Whatever;
