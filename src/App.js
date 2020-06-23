import React from "react";
import Loading from "./components/Loading";
// import Country from "./components/Country";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      fullPath: "",
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => init(data))
      .catch((err) => console.log(err));

    const init = (countriesData) => {
      countriesData.map((i) => {
        return this.setState({
          countries: i.name,
          capitals: i.capital,
          languages: i.languages[0].iso639_1,
          populations: i.population,
          currencies: i.currencies[0].name,
          flags: i.flag,
        });
      });
    };

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  changeHandler = (e) => {
    this.setState({
      userInput: e.target.value.trim(),
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.submitHandler}>
            <input
              type="text"
              onChange={this.changeHandler}
              placeholder="Write a country name"
            />
            <button type="submit">Search</button>
          </form>

          <h3>
            Country: {`${this.state.countries} `}
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
        {/* <Country data={this.state.props} /> */}
      </React.Fragment>
    );
  }
}
