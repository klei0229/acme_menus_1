import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants, setMenu, fetchMenus } from "../store";
// import { logout } from '../store';

import Papa from "papaparse";
import MenuCard from "./MenuCard/MenuCard";
//mui
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  Divider,
  Grid,
} from "@mui/material";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menus } = useSelector((state) => state);

  const [open, setOpen] = React.useState(false);

  const [data, setData] = React.useState({});

  const [csv, setCSV] = React.useState(null);

  useEffect(() => {
    dispatch(fetchMenus());
  }, []);

  useEffect(() => {
  }, [menus]);

  useEffect(() => {
    if (csv) {
      csv.addEventListener("change", (ev) => {
        const file = ev.target.files[0];
        Papa.parse(file, {
          complete: function (results) {
            setData(results);
          },
        });

      });
    }
  }, [csv]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getJSON = (data) => {
    data.data.pop();
    const arr = {};

    data.data.map((item) => {

      const obj = {
        name: item[0],
        image: item[1],
        description: item[2],
        price: item[3],
      };

      if (!arr.hasOwnProperty(item[4])) {
        // const categoryArr = [];
        arr[item[4]] = [];
      }

      arr[item[4]].push(obj);
    });
    // arr.pop();
    return arr;
  };

  const handleSubmit = () => {
    // console.log(data);
    // const JSONData = getJSON(data);
    // dispatch(setMenu(JSONData));
    navigate("/creatingMenu");
    // return JSONData;
  };

  return (
    <div>
      <Container maxWidth='xl' >
      <Typography variant ='h4'>
        My Menus
        </Typography>  
      </Container>
      {/* <h1>Dashboard</h1> */}
      {/* <h2>My Menus</h2> */}
      {/* <h2>Here are your existing menus</h2> */}
      {/* <h3>Menu 1</h3> */}
      {/* <h3>{menus.length}</h3> */}
      {/* <h3>{menus[0]}</h3> */}

      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {menus.map((menu) => {
            // {const menuObj = JSON.parse(menu.data)}
            return (

                <Grid  item xl={2}>
                  {/* here */}
                  <MenuCard props={menu}></MenuCard>
                </Grid>
              
            );
          })}
        </Grid>
      </Container>
      <Container maxWidth="lg"></Container>
      <hr></hr>
      {/* <CreateAMenu></CreateAMenu> */}
      <Container maxWidth="lg"></Container>
      <Button onClick={handleSubmit}>Create New Menu</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create A New Menu</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new menu, please enter the following information.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="resname"
            label="Restaurant Name"
            type="resname"
            fullWidth
            variant="standard"
          />
          {/* <Typography>Menu Template</Typography> */}
          <br></br>
          <br></br>
          <Divider></Divider>
          {/* <InputLabel id="demo-simple-select-label">Select a Template</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={1}
            label="Template #"
            onChange={1}
            displayEmpty='true'

            >
            <MenuItem value={10}>Template 1</MenuItem>

          </Select> */}
          <Divider></Divider>
          <InputLabel id="demo-simple-select-label">CSV Data</InputLabel>
          {/* <Typography>CSV Data</Typography> */}
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              hidden
              ref={(x) => {
                setCSV(x);
              }}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Enter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LandingPage;
