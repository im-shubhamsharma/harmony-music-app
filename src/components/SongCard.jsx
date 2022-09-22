import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function SongCard({song}) {

    // console.log(topCharts[0].artists[0].adamid);
    
  
    
  return (
    <Card
      sx={{ width: 270, height: 310, borderRadius: 5, textAlign: "center" }}
    >
      <CardMedia
        component="img"
        height="220"
        image={song.images.coverart}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {song.title}
        </Typography>
        <Link to={`/ArtistDetail/${song.artists[0].adamid}`}>
          <Typography variant="body2" color="text.secondary">
            {song.subtitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
