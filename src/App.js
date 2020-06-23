import React from "react";
// import Loading from "./components/Loading";
// import Country from "./components/Country";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      countriesData: [
        {
          capitals: "",
          populations: "",
          languages: "",
          currencies: "",
        },
      ],
    };
    this.init = (countriesData) => {
      console.log(countriesData);

      this.setState({
        countriesData,
      });
    };

    this.result = this.state.countriesData.map((item, i) => {
      console.log(item);

      return (
        <div key={i}>
          <h3>
            Country: {`${item.name} `}
            <img src={item.flags} alt={item.name} width="30px" />
          </h3>
          <p>Capital: {item.capitals}</p>
          <p>Population: {item.populations}</p>
          <p>Language: {item.languages}</p>
          <p>Currency: {item.currencies}</p>
        </div>
      );
    });
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
      .then((data) => this.init(data))
      .catch((err) => alert(err));
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
        <div>{this.result}</div>
        {/* <Country data={this.state.props} /> */}
      </React.Fragment>
    );
  }
}

// countriesData.map((item) => {
//   this.setState({
//     capitals: item.capital,
//     languages: item.languages[0].iso639_1,
//     populations: item.population,
//     currencies: item.currencies[0].name,
//     flags: item.flag,
//   });
//   return (
//     <div>
//       <h3>
//         Country: {`${this.state.name} `}
//         <img
//           src={this.state.flags}
//           alt={this.state.userInput}
//           width="30px"
//         />
//       </h3>
//       <p>Capital: {this.state.capitals}</p>
//       <p>Population: {this.state.populations}</p>
//       <p>Language: {this.state.languages}</p>
//       <p>Currency: {this.state.currencies}</p>
//     </div>
//   );
// });
