import React, { useState, useEffect } from "react";
import axios from "axios";

import ApiWalker from "./ApiWalker";

const PlanetPage = (props) => {
  const [planet, setPlanet] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/" + props.id + "/")
      .then((response) => {
        setPlanet(response.data);
      });
  }, [props.id]);

  return (
    <div className="container mt-5">
      <ApiWalker />
      <div className="row justify-content-center">
        <div className="person-wrapper">
          <h3>Planet: {planet.name}</h3>
          <p className="lead">Climate: {planet.climate}</p>
          <p className="lead">Terrain: {planet.terrain}</p>
          <p className="lead">Surface Water: {planet.surface_water}</p>
          <p className="lead">Population: {planet.population}</p>
        </div>
      </div>
    </div>
  );
};

export default PlanetPage;
