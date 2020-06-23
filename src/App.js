import React from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      loading: true,
    };
    this.handleChange = (e) => {
      this.setState({
        userInput: e.target.value.trim(),
      });
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);

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
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Country App</h1>
        {/* <Country data="sendSomething" /> */}
      </React.Fragment>
    );
  }
}
