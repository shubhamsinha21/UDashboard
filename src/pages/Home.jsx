import Sidenav from "../components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              Hello
            </Grid>
            <Grid item xs={4}>
              Hello
            </Grid>
          </Grid>

          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              Hello
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
