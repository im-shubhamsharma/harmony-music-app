import React from 'react'
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Box } from '@mui/material';

const Controls = () => {
  return (
    <Box>
      <ButtonGroup color="warning" aria-label="outlined primary button group">
        <Button
          sx={{
            width: 100,
          }}
        >
          <SkipPreviousIcon />
        </Button>
        <Button
          sx={{
            width: 100,
          }}
        >
          <PlayCircleIcon />
          <PauseCircleOutlineIcon />
        </Button>
        <Button
          sx={{
            width: 100,
          }}
        >
          <SkipNextIcon />
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Controls