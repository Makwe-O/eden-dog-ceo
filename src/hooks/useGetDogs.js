import { useEffect, useState } from 'react';
import { makeRequest } from '../utils/axiosSetup';

export default function useGetDogs(searchTerm = 'corgi', pageNumber = 0) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  let start = pageNumber;
  let end = pageNumber + 8;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await makeRequest(`/breed/${searchTerm}/images`);

      setDogs((prevDogs) => [...prevDogs, ...data.message.slice(start, end)]);
      setHasMore(pageNumber < data.message.length);
      setLoading(false);
    };
    try {
      fetchData();
    } catch (error) {
      console.log('An error occured', error);
    }
  }, [pageNumber]);

  return { loading, dogs, hasMore };
}
