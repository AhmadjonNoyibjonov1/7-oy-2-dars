import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import { Pagination } from '@mui/material';
import data from "../assets/data/data.json";

function Card() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  useEffect(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setCars(data.slice(startIndex, endIndex)); 
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={styles.cardWrapper}>
      {cars.map((car, index) => (
        <div key={index} className={styles.card}>
          <img
            src={car.image || "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg"}
            alt={car.title || "Car image"}
          />
          <h3>{car.title || "Title"}</h3>
          <p>{car.class || "Class"}</p>
        </div>
      ))}

      <Pagination
        count={Math.ceil(data.length / limit)}
        color="primary"
        className={styles.pagination}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default Card;