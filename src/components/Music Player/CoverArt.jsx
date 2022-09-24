import { CardMedia } from "@mui/material";
import React from "react";

const CoverArt = () => {
  const coverArt =
    "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/1c/e1/d5/1ce1d522-abfb-3495-0357-ed5c6e0aaafc/00602517717282.rgb.jpg/400x400cc.jpg";
  return (
    <CardMedia
      sx={{
        width: 300,
        height: 300,
        borderRadius: 150,
        border: "2px solid",
        overflow: "hidden",
      }}
      image={coverArt}
    />
  );
};

export default CoverArt;
