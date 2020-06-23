import React from "react";
//import Loading from "./components/Loading";
import Country from "./components/Country";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      countriesData: [],
      loading: true,
    };
  }

  changeHandler = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`https://restcountries.eu/rest/v2/name/${this.state.userInput}`)
      .then((res) => {
        const countriesData = res.data;
        this.setState({ countriesData });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              value={this.state.userInput}
              onChange={this.changeHandler}
              placeholder="Write a country name"
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <Country data={this.state.countriesData} />
      </React.Fragment>
    );
  }
}
