import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ResponsiveDrawer from "../appbar";
import { CardActionArea, Paper, Stack, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import example from "./example.json";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { SelectChangeEvent } from "@mui/material/Select";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";



const drawerWidth = 240;

export default function Ics() {
  const [cafe, setCafe] = React.useState(example);
  const [cafeFilter, setCafeFilter] = React.useState(example);

  useEffect(() => {
    console.log(cafe);
  }, []);

  useEffect(() => {
    console.log("cafe", cafe);
  }, [cafe]);

  const [shop, setShop] = React.useState("");

  const handleChangeName = (event: SelectChangeEvent) => {
    setShop(event.target.value as string);
    const o = example.filter((item) =>
      item.categories.includes(event.target.value)
    );
    setPagination({ ...pagination, from: 0, to: 9 });
    const tr = o.slice(0, 9);
    setCafeFilter(o);
    setCafe(tr);
  };

  const [foodName, setfoodName] = React.useState("");

  const handleFoodChangeName = (event: any) => {
    setfoodName(event.target.value as string);
    const i = example.filter((item) =>
      item.name.toLocaleLowerCase().includes(event.target.value)
    );
    setPagination({ ...pagination, from: 0, to: 9 });
    const tr = i.slice(0, 9);
    setCafeFilter(i);
    setCafe(tr);
  };

  const weekday = [6, 0, 1, 2, 3, 4, 5];

  const d = new Date();
  let day = weekday[d.getDay()];
  console.log(day);

  const pageSize = 9;

  useEffect(() => {
    const tr = example.slice(0, 9);
    setCafe(tr);
  }, []);

  const handleChangePage = (event: any, page: any) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    console.log("sssssssssssssss", from, to);
    setPagination({ ...pagination, from: from, to: to });
    const tr = example.slice(from, to);
    setCafe(tr);
  };

  const [pagination, setPagination] = React.useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  let navigate = useNavigate();

  const newPage = (item: any) => {
    navigate('/detail', { state: { id: item.id } })
  }

  return (
    <Box sx={{ display: "flex" }}>
      <ResponsiveDrawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Grid container item>
            <Grid item md={6} xs={12}>
              <Typography variant="h4" fontFamily={"Kanit"}>
                Place
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Restaurent
                  </InputLabel>
                  <Box>
                    <Select
                      sx={{
                        width: "220px",
                        marginBottom: "30px",
                        borderRadius: "30px",
                      }}
                      label="Restaurent"
                      className="inputRounded"
                      onChange={handleChangeName}
                      value={shop}
                    >
                      <MenuItem value="restaurant">Restaurant</MenuItem>
                      <MenuItem value="bakery">Bakery</MenuItem>
                      <MenuItem value="cafe">Cafe</MenuItem>
                    </Select>
                    <TextField
                      sx={{ width: "500px", marginLeft: "20px" }}
                      label="Search name..."
                      className="inputRounded"
                      onChange={(e) => handleFoodChangeName(e)}
                      value={foodName}
                    />
                  </Box>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {cafe.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Link to="/detail" />
                <Card sx={{ maxWidth: 500, marginBottom: "50px" }} >
                  <CardActionArea onClick={() => newPage(item)}>
                    <Grid container sx={{ height: "60px", padding: "16px" }}>
                      <CardMedia
                        image={item.profile_image_url}
                        sx={{ height: "60px", width: "60px" }}
                      />
                      <Box sx={{ width: "400px", paddingLeft: "20px" }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          fontFamily={"Kanit"}
                        >
                          {item.name}
                        </Typography>
                        <Box>
                          <Grid>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <div>
                                <Grid container>
                                  <CalendarMonthIcon />
                                  <Grid item>
                                    <Typography fontFamily={"Kanit"}>
                                      {item.operation_time[day].time_open}{" "}
                                      {item.operation_time[day].time_close}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </div>
                              <div>
                                <Grid container>
                                  <Grid item>
                                    <CircleIcon
                                      sx={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#134b8a",
                                        marginTop: "5px",
                                        marginRight: "3px",
                                      }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <div
                                      style={{
                                        fontFamily: "Kanit",
                                        color: "#134b8a",
                                      }}
                                    >
                                      {item.rating}
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </div>
                          </Grid>
                        </Box>
                      </Box>
                    </Grid>
                    <CardContent>
                      <Grid container>
                        <Grid item>
                          <Grid
                            container
                            sx={{ paddingTop: "16px", marginBottom: "-8px" }}
                          >
                            <CardMedia
                              image={item.images[0]}
                              sx={{ height: "130px", width: "156px" }}
                            ></CardMedia>
                            <CardMedia
                              image={item.images[1]}
                              sx={{ height: "130px", width: "156px" }}
                            ></CardMedia>
                            <CardMedia
                              image={item.images[2]}
                              sx={{ height: "130px", width: "156px" }}
                            ></CardMedia>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* <AppPagin cafe={cafe} setCafe={() => setCafe} /> */}
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          sx={{ margin: "30px 0px" }}
        >
          <Pagination
            count={Math.ceil(cafeFilter.length / pageSize)}
            onChange={handleChangePage}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
}
