import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import React from "react";
import { CardMedia, Typography } from "@mui/material";
import {
  Controls,
  ProgressBar,
  CoverArt,
  SongDetails,
} from "../components/Music Player";

const MusicPlayer = () => {
  const songName = "Umbrella (feat. JAY Z) - Rihanna";
  const artistName = "Rihanna";
  const uri =
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/89/02/f5/8902f5f1-b7ec-ce8d-d782-84024e0c1d2f/mzaf_16686514091958138466.plus.aac.ep.m4a";

  return (
    <Box
      sx={{
        position: "fixed",
        top: "10vh",
        right: 0,
        height: "90vh",
        width: "30%",
        // border: "1px solid orange",
        p: 4,
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          width: "100%",
          height: "100%",
          p: 2,
        }}
      >
        <SongDetails />

        <CoverArt />
        <ProgressBar />
        <Controls />
      </Card>
    </Box>
  );
};

export default MusicPlayer;
