import Sidenav from "../components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography, Stack } from "@mui/material";
import "../NewApp.css";
import Geochart from "../charts/Geochart";

export default function Analytics() {
  return (
    <>
      <Navbar />
      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction={"row"}>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 138, mb: 3 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#ffffff", pt: 1, pb: 1 }}
                      >
                        Vistors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        24,670
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 138 }}
                    className="gradient2"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#ffffff", pt: 1, pb: 1 }}
                      >
                        Vistors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        24,670
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 138 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#ffffff", pt: 1, pb: 1 }}
                      >
                        Vistors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        24,670
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: 48 + "%", height: 138 }}
                    className="gradient2"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h7"
                        component="div"
                        sx={{ color: "#ffffff", pt: 1, pb: 1 }}
                      >
                        Vistors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "#ffffff" }}
                      >
                        24,670
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={7}>
                <Card sx={{ height: 300 }}></Card>
              </Grid>
            </Grid>

            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 320 }}>
                  <CardContent>
                    <Geochart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 320 }}></Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}
