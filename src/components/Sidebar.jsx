import { autocompleteClasses, Button, Container } from "@mui/material";
import { Box, Stack } from "@mui/system";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../utils/constants";

const Sidebar = () => {


  const navElem = navItems.map((item) => (
    <Link key={item.id} to={item.to}>
      <Button
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2.5,
          color: "white"
        }}
      >
        {item.icon}
        {item.name}
      </Button>
    </Link>
  ));

  return (
    <Stack
      sx={{
        position: "fixed",
        top:0,
        left:0,
        // border: "2px solid red",
        width: { sm: "auto", md: "12%" },
        height: { sm: "auto", md: "100vh" },
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        p: 3,
      }}
    >
      <Box>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontSize: "1rem",
            gap: "0.5rem",
          }}
        >
          <MusicNoteIcon
            sx={{
              border: "2px solid",
              borderRadius: "1rem",
              fontSize: "1.2rem",
            }}
          />
          Harmony
        </Button>
      </Box>

      <Box
        sx={{
          marginTop: 10,
        }}
      >
        {navElem}
      </Box>
    </Stack>
  );
};

export default Sidebar;
