import Sidenav from "../components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>kjk</h1>
        </Box>
      </Box>
    </>
  );
}
