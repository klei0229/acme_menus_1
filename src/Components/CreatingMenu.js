import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMenu } from "../store";
// import { logout } from '../store';

//mui
import Menu from "./Menu";
import { Container, Button, Grid, Typography, Paper } from "@mui/material";

import EditPanel from "./EditPanel";

const CreatingMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    // fontSize: 12,
    // item_headingFontSize: 15,
    // item_headingFontFamily: "arial",

    imageURL: "https://i.etsystatic.com/11979725/r/il/425b9a/1431687786/il_fullxfull.1431687786_w5a8.jpg",
    restaurantName: "My Restaurant",
    menu: {},
    item_heading: {
      fontSize: 18,
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
    restaurant_name: {
      fontSize: 100,
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
    categories: {
      fontSize: 36,
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
    descriptions: {
      fontSize: 14,
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
      minHeight: 20
    },
  });

  const fetchData = (data) => {
    let newState = { ...state };
    newState.menu = data;
    setState(newState);
  };

  const submitMenu = () => {
    dispatch(createMenu(state));
    navigate("/");
  };

  const adjustState = (ev) => {

    let name = ev.target.name;

    let newState = {...state};

    if (name === "item_headingFontSize") {
      newState.item_heading.fontSize = ev.target.value;
    } else if (name === "item_headingFontFamily") {
      newState.item_heading.fontFamily = ev.target.value;
    } else if (name === "item_headingFontColorR") {
      newState.item_heading.color.r = ev.target.value;
    } else if (name === "item_headingFontColorG") {
      newState.item_heading.color.g = ev.target.value;
    } else if (name === "item_headingFontColorB") {
      newState.item_heading.color.b = ev.target.value;
    } else if (name === "resName") {
      newState.restaurantName = ev.target.value;
    }
    //_____________________
    if (name === "restaurant_nameFontSize") {
      newState.restaurant_name.fontSize = ev.target.value;
    } else if (name === "restaurant_nameFontFamily") {
      newState.restaurant_name.fontFamily = ev.target.value;
    } else if (name === "restaurant_nameFontColorR") {
      newState.restaurant_name.color.r = ev.target.value;
    } else if (name === "restaurant_nameFontColorG") {
      newState.restaurant_name.color.g = ev.target.value;
    } else if (name === "restaurant_nameFontColorB") {
      newState.restaurant_name.color.b = ev.target.value;
    } 

    if (name === "categoriesFontSize") {
      newState.categories.fontSize = ev.target.value;
    } else if (name === "categoriesFontFamily") {
      newState.categories.fontFamily = ev.target.value;
    } else if (name === "categoriesFontColorR") {
      newState.categories.color.r = ev.target.value;
    } else if (name === "categoriesFontColorG") {
      newState.categories.color.g = ev.target.value;
    } else if (name === "categoriesFontColorB") {
      newState.categories.color.b = ev.target.value;
    } 

    if (name === "descriptionsFontSize") {
      newState.descriptions.fontSize = ev.target.value;
    } else if (name === "descriptionsFontFamily") {
      newState.descriptions.fontFamily = ev.target.value;
    } else if (name === "descriptionsFontColorR") {
      newState.descriptions.color.r = ev.target.value;
    } else if (name === "descriptionsFontColorG") {
      newState.descriptions.color.g = ev.target.value;
    } else if (name === "descriptionsFontColorB") {
      newState.descriptions.color.b = ev.target.value;
    } else if (name === "descriptionsMinHeight") {
    newState.descriptions.minHeight = ev.target.value;
  } 
  else if (name === "imageurlname") {
    newState.imageURL = ev.target.value;
  }
    setState(newState);
    }

  useEffect(() => {
  }, [state]);
  return (
    <div>
      {/* <h1>Edit Your Menu</h1> */}
      <Typography variant='h4'>Demo Instructions</Typography>
        <Typography variant='h6'>Step 1: Click "Upload File" and upload this <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSnxWHLx67KmcIliZ7kc41Q0kWx9qEMk676zE687BvQSOS6FtHY2CdbsbD3AymchT-7irceSOMXVaqO/pub?output=csv">Sample Menu CSV</a> into the editor panel.</Typography>
        <Typography variant='h6'>Step 2: Change the name of your restaurant.</Typography>
        <Typography variant='h6'>Step 3: Change the appearances of the Restaurant Name Font / Menu Item Font/ Categories Font / Descriptions via the Editor Panel.</Typography>
        <Typography variant='h6'>Step 4: Click "Create Menu" to finish menu creation.</Typography>

<br></br>
      <Grid container spacing={3}>
        <Grid item
          // backgroundColor="blue"
          lg={2}
          sx={{
          }}
        >
          <Paper elevation="10" sx={{
          pt:2,
          pb:2

          }}>
            <Container maxWidth="lg">
              <Typography variant="h4">Editor</Typography>
              <EditPanel
                onSubmit={submitMenu}
                onChange={adjustState}
                fetchData={fetchData}
                state={state}
              />
            </Container>
          </Paper>
        </Grid>

        <Grid item 
        // backgroundColor="purple" 
        lg={10}>
          {/* Preview Tab */}
          <Paper elevation="10" sx={{
          pt:2,
          pb:2

          }}>
          <Container maxWidth="lg">
          <Typography variant="h4">Preview</Typography>
            <Menu state={state}></Menu>
          </Container>
        </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatingMenu;
