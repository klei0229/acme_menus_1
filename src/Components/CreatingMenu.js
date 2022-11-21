import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
// import { logout } from '../store';

//mui
import Menu from "./Menu";
import { Container, Button, Grid, Typography } from "@mui/material";

import EditPanel from "./EditPanel";

const CreatingMenu = () => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    // fontSize: 12,
    // headingFontSize: 15,
    // headingFontFamily: "arial",

    restaurantName: "Restaurant Name",
    menu: {},
    heading: {
      fontSize: 12,
      fontFamily: "verdana",
      color: {
        r: 0,
        g: 0,
        b: 0,
      },
      padding: {
        pt: 0,
        pr: 0,
        pl: 0,
        pb: 0,
      },
      margin: {
        mt: 0,
        mr: 0,
        ml: 0,
        mb: 0,
      },
    },
  });

  const fetchData = (data) => {
    console.log("fetch data");
    console.log(data);
    let newState = { ...state };
    newState.menu = data;
    setState(newState);
    console.log(state);
  };

  const submitMenu = () => {
    console.log("submitted menu");
  };

  const adjustState = (ev) => {
    console.log(ev.target.value);
    console.log(ev.target.name);

    let name = ev.target.name;

    if (name === "headingFontSize") {
      console.log("hereeeee");
      let newState = { ...state };
      console.log(newState);
      newState.heading.fontSize = ev.target.value;
      setState(newState);
    } else if (name === "headingFontFamily") {
      let newState = { ...state };
      newState.heading.fontFamily = ev.target.value;
      setState(newState);
    } else if (name === "headingFontColorR") {
      let newState = { ...state };
      newState.heading.color.r = ev.target.value;
      setState(newState);
    } else if (name === "headingFontColorG") {
      let newState = { ...state };
      newState.heading.color.g = ev.target.value;
      setState(newState);
    } else if (name === "headingFontColorB") {
      let newState = { ...state };
      newState.heading.color.b = ev.target.value;
      setState(newState);
    } else if (name ==="resName"){
        console.log('here')
        let newState = { ...state };
        newState.restaurantName = ev.target.value;
        setState(newState);
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <h1>Edit Your Menu</h1>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <Container maxWidth="lg">
          <Typography variant='h4'>Editor</Typography>
            <EditPanel
              onSubmit={submitMenu}
              onChange={adjustState}
              fetchData={fetchData}
              state={state}
            />
          </Container>
        </Grid>
        <Grid item>
          {/* Preview Tab */}
          <Typography variant='h4'>Preview</Typography>
          <Container maxWidth="lg">
            <Menu state={state}></Menu>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatingMenu;
