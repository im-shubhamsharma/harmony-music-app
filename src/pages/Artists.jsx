import { Box } from '@mui/material';
import React from 'react'
import ArtistsCard from '../components/ArtistsCard'
import { artists } from "../utils/constants";
import { Link } from 'react-router-dom';

const Artists = () => {
  
  const artistsElem = artists.map((artist) => (
    <Link to={`/ArtistDetail/${artist.id}`}>
      <ArtistsCard key={artist.id} artist={artist} />
    </Link>
  ));

  return (
    <Box 
     sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: 2,
     }}
    >
        {artistsElem}
    </Box>
  )
}

export default Artists