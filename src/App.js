import { useEffect, useState } from 'react';

function App() {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(true);
  const getMovies = async () => {
    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();

    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoad(false);
  };

  useEffect(() => {
    // fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.data.movies);
    //     setMovie(res.data.movies);
    //     setLoad(false);
    //   });
    getMovies();
  }, []);
  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((item) => (
            <div key={item.id}>
              {' '}
              <img src={item.medium_cover_image} />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul>
                {item.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
