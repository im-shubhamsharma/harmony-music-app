import React, { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import { Box } from "@mui/material";
import { useGetTopChartsQuery } from "../redux/fetchFromAPI";
import Loader from "../components/Loader";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  
  if(isFetching) return <Loader title="Loading Songs..."/>

  if(error) return <Error/>

  const topChartsElem = data.map((chart) => <SongCard key={chart.key} song={chart} />);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {topChartsElem}
    </Box>
  );
};

export default TopCharts;
