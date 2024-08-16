import React, { useState, useEffect } from 'react';
import styles from './card.module.css';
import { Pagination } from '@mui/material';
import data from "../assets/data/data.json";

function Card() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    setCars(data.slice(startIndex, endIndex));
  }, [page, limit]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
    setPage(1); // Reset to the first page when limit changes
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

      <div className={styles.fixed}>
        <Pagination
          count={Math.ceil(data.length / limit)}
          color="primary"
          className={styles.pagination}
          page={page}
          onChange={handlePageChange}
        />

        <select value={limit} onChange={handleLimitChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
}

export default Card;