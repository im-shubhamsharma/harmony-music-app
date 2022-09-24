import { Box, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";

const ProgressBar = () => {
  const theme = useTheme();
 
  console.log(theme.palette);

  const duration = 200; // seconds
  const [position, setPosition] = useState(32);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  return (
    <div
     style={{width:"75%"}}
    >
      <Slider
        aria-label="time-indicator"
        size="large"
        value={position}
        min={0}
        step={1}
        max={duration}
        onChange={(_, value) => setPosition(value)}
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === "dark"
                  ? "rgb(255 255 255 / 16%)"
                  : "rgb(0 0 0 / 16%)"
              }`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -1,
          color: `${theme.palette.success.main}`
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            // opacity: 0.38,
            fontWeight: 500,
            letterSpacing: 0.2,
          }}
        >
          {formatDuration(position)}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            // opacity: 0.38,
            fontWeight: 500,
            letterSpacing: 0.2,
          }}
        >
          -{formatDuration(duration - position)}
        </Typography>
      </Box>
    </div>
  );
};

export default ProgressBar;
