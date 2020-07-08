import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import useGetDogs from '../hooks/useGetDogs';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const { dogs, loading, hasMore } = useGetDogs('airedale', pageNumber);
  const observer = useRef();
  const lastDogElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setTimeout(
            () => setPageNumber((prevPageNumber) => prevPageNumber + 8),
            2000,
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <div className="container">
      <div className="home__grid">
        {dogs?.map((dog, index) =>
          dogs.length === index + 1 ? (
            <Link
              to={{ pathname: `/dog/${index}`, image: dog }}
              key={index}
              ref={lastDogElementRef}>
              <Card img={dog} />
            </Link>
          ) : (
            <Link
              to={{ pathname: `/dog/${index}`, image: dog }}
              key={index}
              ref={lastDogElementRef}>
              <Card img={dog} />
            </Link>
          ),
        )}
      </div>
      {loading && <p>Loading</p>}
    </div>
  );
};

export default Home;
