import { useEffect, useState } from 'react';
import Movie from './Movie';

function App() {
  const [movie, setMovie] = useState([]);
  const [load, setLoad] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovie(json.data.movies);
    setLoad(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {load ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movie.map((item) => (
            <Movie
              key={item.id}
              coverImage={item.medium_cover_image}
              title={item.title}
              summary={item.summary}
              genres={item.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
