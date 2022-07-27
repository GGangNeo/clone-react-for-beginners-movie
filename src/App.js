import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoad(false);
        console.log(json);
      });
  }, []);
  return (
    <div>
      <h1> Coin Tracker ({coins.length}) </h1>
      {load ? <strong> Loading..</strong> : null}
      <ul>
        {load
          ? null
          : coins.map((item) => (
              <li key={item.id}>
                {item.name} ({item.symbol}) ${item.quotes.USD.price}
              </li>
            ))}
      </ul>
    </div>
  );
}

export default App;
