import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ApiWalker = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("people");
  const [givenId, setGivenId] = useState("");
  const [maxInput, setMaxInput] = useState("80");

  const handleForm = (e) => {
    e.preventDefault();
    navigate(`/${selectedCategory}/${givenId}/`);
  };

  const changeCategory = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value === "planets") {
      setMaxInput("60");
    } else if (e.target.value === "people") {
      setMaxInput("80");
    }

    if (parseInt(givenId) > 60 && e.target.value === "planets") {
      e.target.nextElementSibling.value = 60;
    }
  };

  return (
    <div className="container mb-5">
      <form
        className="mt-5 form-inline justify-content-center"
        onSubmit={handleForm}
      >
        <div className="form-group mb-2">
          <label className="mr-3" htmlFor="searchFor">
            Search for:{" "}
          </label>
          <select
            class="form-control mr-3"
            id="searchFor"
            onChange={changeCategory}
          >
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label className="mr-3" htmlFor="IDInput">
            ID:
          </label>
          <input
            type="number"
            className="form-control mr-3"
            id="IDInput"
            min="1"
            max="maxInput"
            onChange={(e) => setGivenId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark mb-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default ApiWalker;
