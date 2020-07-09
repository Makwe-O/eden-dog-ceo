import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useGetDogs(searchTerm = 'corgi', pageNumber = 0) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  let start = pageNumber;
  let end = pageNumber + 8;
  useEffect(() => {
    setDogs([]);
  }, [searchTerm]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setHasError(false);
        setLoading(true);
        const request = await axios.get(
          `https://dog.ceo/api/breed/${searchTerm}/images`,
        );
        const data = await request.data;
        setDogs((prevDogs) => [
          ...prevDogs,
          ...data?.message.slice(start, end),
        ]);
        setHasMore(pageNumber < data.message.length);
        setLoading(false);
      } catch (err) {
        setHasError(true);
        setError(err);
        // if (err.response) {
        //   // client received an error response (5xx, 4xx)
        //   setError(err.response);
        //   console.log(
        //     'There was an issue with the search',
        //     err.response.status,
        //   );
        // } else if (err.request) {
        //   // client never received a response, or request never left
        //   setError(err.request);
        //   console.log('There was an issue with the request');
        // } else {
        //   // anything else
        //   setError(err);
        //   console.log('An error occured please try again');
        // }
      }
    };
    fetchData();
  }, [pageNumber, end, searchTerm, start]);

  return { loading, dogs, hasMore, hasError, error };
}
