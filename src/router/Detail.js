import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Detail = () => {
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return <h3> Details </h3>;
};

export default Detail;
