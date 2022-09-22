import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Container, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const ArtistDetail = () => {
  const [artistData, setArtistData] = useState("");

  const varKey = useParams();
  const id = varKey.id;
  console.log(id);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/artists/details",
      params: { artist_id: `${id}` },
      headers: {
        "X-RapidAPI-Key": "5ea85e5006msh4991aef8c6357f9p1954dajsn414615d81423",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setArtistData(response.data.artists[id]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <Box
     sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
     }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          borderRadius: 150,
          overflow: "hidden"
        }}
      >
        {artistData && (
          <img
            src={artistData.attributes.artwork.url
              .replace("{w}", "300")
              .replace("{h}", "300")}
          />
        )}
      </Box>
      {artistData && <Typography variant="h2">{artistData.attributes.name}</Typography>}
    </Box>
  );
};

export default ArtistDetail;
