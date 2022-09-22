import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MusicCard({ artist }) {

  return (
    <Card sx={{ width: 270, height: 310, borderRadius: 5, textAlign: "center" }}>
      <CardMedia
        component="img"
        height="250"
        image={artist.thumbnail}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {artist.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
