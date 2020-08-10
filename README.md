## Basic informations about countries
### This app uses REST countries API

```javascript
 let textToUrl = encodeURIComponent(this.state.userInput);
    fetch(`https://restcountries.eu/rest/v2/name/${textToUrl}`)
      .then((res) => res.json())
      .then((data) => this.newSearch(data))
      .catch((err) => console.error(err));
  };
```
clone this repo and:

### `npm install`

Will install all the needed packages form npm and will create ```node_modules```


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



### `npm run build`

Builds the app for production to the `build` folder.<br />



### PS: another solution using [axios](https://github.com/axios/axios) is provided on the branch `axios`
