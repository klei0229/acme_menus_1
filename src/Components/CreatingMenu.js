import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
// import { logout } from '../store';

//mui
import Menu from "./Menu";
import { Container, Button, Grid } from "@mui/material";

import EditPanel from "./EditPanel";

const CreatingMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const [state, setState] = React.useState({
    fontSize: 12,
    headingFontSize: 15,
    headingFontFamily: "arial",

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
    }else if (name === "headingFontColorG") {
        let newState = { ...state };
        newState.heading.color.g = ev.target.value;
        setState(newState);
      }else if (name === "headingFontColorB") {
        let newState = { ...state };
        newState.heading.color.b = ev.target.value;
        setState(newState);
      }
  };

  return (
    <div>
      <h1>Edit Your Menu</h1>
      <Grid container spacing={2}>
        <Grid item lg={2}>
          <Container maxWidth="lg">
            <EditPanel onChange={adjustState} state={state} />
          </Container>
        </Grid>
        <Grid item>
          Preview Tab
          <Container maxWidth="lg">
            <Menu state={state}></Menu>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatingMenu;
