import { Box } from "@mui/system";
import React from "react";
import Artists from "./Artists";
import TopCharts from "./TopCharts";
import { Routes, Route } from "react-router-dom";
import ArtistDetail from "./ArtistDetail";

const Feed = () => {
  return (
      <Box
        sx={{
          marginLeft: { xs: "auto", md: "12%" },
          marginTop: "10vh",
          // border: "2px solid orange",
          width: { sm: "auto", md: "50%" },
          overflowY: "auto",
          p: 4,
        }}
      >
      <Routes>
         <Route path="/artists" element={<Artists />}/>
         <Route path="/top" element={<TopCharts />}/>
         <Route path="/artistDetail/:id" element={<ArtistDetail />}/>
      </Routes>
      </Box>
  );
};

export default Feed;
