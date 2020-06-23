import React from "react";
// import Loading from "./components/Loading";
// import Country from "./components/Country";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
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
    let textToUrl = encodeURIComponent(this.state.userInput);
    fetch(`https://restcountries.eu/rest/v2/name/${textToUrl}`)
      .then((res) => res.json())
      .then((data) => init(data))
      .catch((err) => console.log(err));

    const init = (countriesData) => {
      countriesData.map((item) => {
        this.setState({
          capitals: item.capital,
          languages: item.languages[0].iso639_1,
          populations: item.population,
          currencies: item.currencies[0].name,
          flags: item.flag,
        });
        return (
          <div>
            <h3>
              Country: {`${this.state.userInput} `}
              <img
                src={this.state.flags}
                alt={this.state.countries}
                width="30px"
              />
            </h3>
            <p>Capital: {this.state.capitals}</p>
            <p>population: {this.state.populations}</p>
            <p>language: {this.state.languages}</p>
            <p>currency: {this.state.currencies}</p>
          </div>
        );
      });
    };
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
        <ul></ul>
        {/* <Country data={this.state.props} /> */}
      </React.Fragment>
    );
  }
}
