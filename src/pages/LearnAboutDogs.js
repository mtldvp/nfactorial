import React, { useState, useEffect } from 'react';
import DogCard from '../components/dogCard.js';
import '../styles/LearnAboutDogs.module.css';
import breedsData from './breeds.json';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

const LearnAboutDogs = () => {
  const [breeds, setBreeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [originSearchTerm, setOriginSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 30;

  useEffect(() => {
    const breedsArray = breedsData.filter(breed => breed.id && breed.breed && breed.origin && breed.img && breed.url);
    setBreeds(breedsArray);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset to first page when search term changes
  };

  const handleOriginSearchChange = (event) => {
    setOriginSearchTerm(event.target.value);
    setPage(1); // Reset to first page when origin search term changes
  };

  const filteredBreeds = breeds
    .filter(breed => breed.breed.toLowerCase().includes(searchTerm.toLowerCase()) && breed.origin.toLowerCase().includes(originSearchTerm.toLowerCase()));

  const paginatedBreeds = filteredBreeds
    .slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const breedlist = paginatedBreeds.map((breed) => (
    <Grid item xs={12} sm={6} md={4} key={breed.id}>
      <DogCard name={breed.breed} img={breed.img} origin={breed.origin} url={breed.url} />
    </Grid>
  ));

  const totalPages = Math.ceil(filteredBreeds.length / itemsPerPage);
  
  return (
    <div>
      <h1>Learn About Dogs</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
  <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search for a breed" style={{ width: '30%', marginRight: '10px' }} />
  <input type="text" value={originSearchTerm} onChange={handleOriginSearchChange} placeholder="Search by origin" style={{ width: '30%' }} />
</div>
      <Grid container spacing={3} style={{justifyContent: 'center'}}>
        {breedlist}
      </Grid>
      <Pagination count={totalPages} page={page} onChange={(event, value) => setPage(value)} />
    </div>
  );
}

export default LearnAboutDogs;