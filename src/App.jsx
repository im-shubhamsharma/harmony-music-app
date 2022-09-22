import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import Search from "./components/Search";
import Feed from "./pages/Feed";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./pages/MusicPlayer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <Search />
        <Sidebar />
        <Feed />
        <MusicPlayer />
      </>
    </ThemeProvider>
  );
}

export default App;
