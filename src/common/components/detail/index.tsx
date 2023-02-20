import { Box, Button, Card, CardContent, CardMedia, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../appbar";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CircleIcon from "@mui/icons-material/Circle";
import example from "../body/example.json"
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function Detail() {
      const location = useLocation();
      const id = location.state.id
      const data1 = example.filter(item => item.id === id)
      useEffect(() => {
            console.log('data1', data1)
      }, [])
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

                                          <Button href="/" sx={{ fontFamily: "Kanit", color: "white", backgroundColor: "#134b8a", borderRadius: "20px" }} >
                                                <ArrowBackIosNewIcon sx={{ color: "white" }} />
                                                Back</Button>

                                    </Grid>
                              </Grid>
                        </Box>
                        <Card style={{ backgroundColor: "#C4D3E9", marginTop: "30px", padding: "16px" }}>
                              <CardContent>
                                    <Grid container spacing={2}>
                                          <Grid item xs={12} md={6}>

                                                <CardMedia
                                                      image={data1[0].profile_image_url}
                                                      sx={{
                                                            height: "400px",
                                                            width: "700px",
                                                            objectFit: "cover",
                                                            borderTopLeftRadius: "10px",
                                                            borderTopRightRadius: "10px",
                                                            borderBottomLeftRadius: 0,
                                                            borderBottomRightRadius: 0,
                                                      }}
                                                />

                                                <Box style={{
                                                      height: "500px", width: "700px", backgroundColor: "white", borderTopLeftRadius: 0,
                                                      borderTopRightRadius: 0,
                                                      borderBottomLeftRadius: "10px",
                                                      borderBottomRightRadius: "10px",
                                                      padding: "15px"
                                                }}>
                                                      <Grid container alignItems="center">
                                                            <Grid item style={{ flexGrow: 1 }}>
                                                                  <h3 style={{ textAlign: "left" }}>{data1[0].name}</h3>
                                                            </Grid>
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
                                                                        {data1[0].rating}
                                                                  </div>
                                                            </Grid>
                                                      </Grid>

                                                      <Grid container>
                                                            <Grid item>
                                                                  Address : {data1[0].address}
                                                            </Grid>
                                                            <Grid item>

                                                            </Grid>
                                                      </Grid>
                                                      <Grid container>
                                                            <Grid item></Grid>
                                                            Opening Hour : {data1[0].operation_time[0].time_open} - {data1[0].operation_time[0].time_close}
                                                      </Grid>
                                                      <Grid item>
                                                      </Grid>

                                                </Box>
                                          </Grid>

                                          <Grid item xs={12} md={6}>
                                                <Box style={{
                                                      height: "930px", width: "700px", backgroundColor: "white", borderTopLeftRadius: 0,
                                                      borderTopRightRadius: 0,
                                                      borderBottomLeftRadius: "10px",
                                                      borderBottomRightRadius: "10px",
                                                      padding: "15px"
                                                }}>
                                                      <CardMedia image={data1[0].images[0]}
                                                            sx={{ height: "300px", width: "100%", objectFit: "cover" }}></CardMedia>
                                                      <CardMedia image={data1[0].images[1]}
                                                            sx={{ height: "300px", width: "100%", objectFit: "cover" }}></CardMedia>
                                                      <CardMedia image={data1[0].images[2]}
                                                            sx={{ height: "300px", width: "100%", objectFit: "cover" }}></CardMedia>
                                                </Box>

                                          </Grid>
                                    </Grid>
                              </CardContent>
                        </Card>
                  </Box >
            </Box >
      )
}
