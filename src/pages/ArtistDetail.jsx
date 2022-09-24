import { useParams } from "react-router-dom";
import { Box, Container, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import { useGetArtistDetailsQuery } from "../redux/fetchFromAPI";
import Loader from "../components/Loader";
import Error from "../components/Error";

const ArtistDetail = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetArtistDetailsQuery(id);

  if (isFetching) return <Loader />;
  if (error) return <Error />;

  

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
          overflow: "hidden",
        }}
      >
        <img
          src={data.artists[id].attributes.artwork.url
            .replace("{w}", "300")
            .replace("{h}", "300")}
        />
      </Box>
      {data && (
        <Typography variant="h2">{data.artists[id].attributes.name}</Typography>
      )}
    </Box>
  );
};

export default ArtistDetail;
