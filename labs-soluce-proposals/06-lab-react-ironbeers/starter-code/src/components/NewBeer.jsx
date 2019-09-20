import React, { useState } from "react";
import axios from "axios";

const NewBeer = props => {
  const [state, setState] = useState({
    tagline: "",
    name: "",
    first_brewed: ""
  });

  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", state)
      .then(res => {
        props.history.push("/");
        // axios
        //   .get("https://ih-beer-api.herokuapp.com/beers/search?q=" + state.name)
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(err => {
        //     console.log(err);
        // });
      })
      .catch(err => console.log(err));
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <p>{JSON.stringify(state)}</p>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="tagline">Tagline</label>
      <input type="text" name="tagline" id="tagline" />
      <label htmlFor="description">Description</label>
      <input type="text" name="description" id="description" />
      <label htmlFor="first_brewed">First Brewed</label>
      <input type="text" name="first_brewed" id="first_brewed" />
      <label htmlFor="brewers_tips">Brewer Tips</label>
      <input type="text" name="brewers_tips" id="brewers_tips" />
      <label htmlFor="attenuation_level">Attenuation level</label>
      <input type="number" name="attenuation_level" id="attenuation_level" />
      <label htmlFor="contributed_by">Contributed by</label>
      <input type="text" name="contributed_by" id="contributed_by" />
      <button>Submit</button>
    </form>
  );
};

export default NewBeer;
