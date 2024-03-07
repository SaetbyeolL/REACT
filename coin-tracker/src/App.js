import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true); 
  const [coins, setCoins] = useState([]);

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response)=> (
        response.json()
      ))
      .then((json) => {
        setCoins(json);    // store data in coins array
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin)=> 
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </li>
        )
        }
      </ul>
    </div>
  );
}

export default App;



// asynchronous: One task running independently of another task

// () => {} : Anonymous functions. 
// used in situations where they are passed as parameters to other functions or methods, or used as callback functions

// fetch() : initiates a network request(HTTP request) and retrieves data from that URL
// it return Promise object which includes properties and method. .then() is one of them. 
// .then() 