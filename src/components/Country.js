import React from "react";
const Country = (props) => {
  const result = props.data.map((item, i) => {
    console.log(item);

    return (
      <React.Fragment key={i}>
        <h3>
          {item.name}{" "}
          <img src={item.flag} alt={item.name} width="30px" key={i} />
        </h3>

        <p> Capital: {item.capital}</p>
        <p> Language: {item.languages[0].name}</p>
        <p> Currency: {item.currencies[0].code}</p>
        <p> Population: {item.population}</p>
      </React.Fragment>
    );
  });
  return <React.Fragment>{result}</React.Fragment>;
};
export default Country;
