import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMenu } from "../store";
// import { logout } from '../store';

//mui
import Menu from "./Menu";
import { Container, Button, Grid, Typography } from "@mui/material";

import EditPanel from "./EditPanel";

const CreatingMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    // fontSize: 12,
    // item_headingFontSize: 15,
    // item_headingFontFamily: "arial",

    restaurantName: "Restaurant Name",
    menu: {},
    item_heading: {
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
    dispatch(createMenu(state));
    navigate('/')
  };

  const adjustState = (ev) => {
    console.log(ev.target.value);
    console.log(ev.target.name);

    let name = ev.target.name;

    if (name === "item_headingFontSize") {
      console.log("hereeeee");
      let newState = { ...state };
      console.log(newState);
      newState.item_heading.fontSize = ev.target.value;
      setState(newState);
    } else if (name === "item_headingFontFamily") {
      let newState = { ...state };
      newState.item_heading.fontFamily = ev.target.value;
      setState(newState);
    } else if (name === "item_headingFontColorR") {
      let newState = { ...state };
      newState.item_heading.color.r = ev.target.value;
      setState(newState);
    } else if (name === "item_headingFontColorG") {
      let newState = { ...state };
      newState.item_heading.color.g = ev.target.value;
      setState(newState);
    } else if (name === "item_headingFontColorB") {
      let newState = { ...state };
      newState.item_heading.color.b = ev.target.value;
      setState(newState);
    } else if (name === "resName") {
      console.log("here");
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
            <Typography variant="h4">Editor</Typography>
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
          <Typography variant="h4">Preview</Typography>
          <Container maxWidth="lg">
            <Menu state={state}></Menu>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatingMenu;
