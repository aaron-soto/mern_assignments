import React, { useState, useEffect } from "react";
import axios from "axios";

import ApiWalker from "./ApiWalker";

const PeoplePage = (props) => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + props.id + "/")
      .then((response) => {
        setPerson(response.data);
      });
  }, [props.id]);

  return (
    <div className="container mt-5">
      <ApiWalker />
      <div className="row justify-content-center">
        <div className="person-wrapper">
          <h3>Person: {person.name}</h3>
          <p className="lead">Height: {person.height}</p>
          <p className="lead">Mass: {person.mass}</p>
          <p className="lead">Hair Color: {person.hair_color}</p>
          <p className="lead">Skin Color: {person.skin_color}</p>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
