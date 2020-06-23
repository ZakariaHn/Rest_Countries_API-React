import React from "react";
import Country from "./components/Country";

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

  newSearch = (countriesData) => {
    this.setState({
      countriesData,
    });
    console.log(countriesData);
  };

  submitHandler = (e) => {
    e.preventDefault();
    let textToUrl = encodeURIComponent(this.state.userInput);
    fetch(`https://restcountries.eu/rest/v2/name/${textToUrl}`)
      .then((res) => res.json())
      .then((data) => this.newSearch(data))
      .catch((err) => console.error(err));
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
            <button type="submit"></button>
          </form>
        </div>
        <Country data={this.state.countriesData} />
      </React.Fragment>
    );
  }
}
