import React, { useState, useEffect } from "react";
import axios from "axios";
import SongCard from "../components/SongCard";
import { Box } from "@mui/material";

const TopCharts = () => {
  const [topCharts, setTopCharts] = useState([]);



  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
      headers: {
        "X-RapidAPI-Key": "5ea85e5006msh4991aef8c6357f9p1954dajsn414615d81423",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTopCharts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const topChartsElem = topCharts.map((chart) => <SongCard song={chart} />);

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
