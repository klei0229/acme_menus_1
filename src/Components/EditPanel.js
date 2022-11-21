import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
import InputSlider from "./InputSlider";
// import { logout } from '../store';
import Papa from "papaparse";

//mui
import Menu from "./Menu";
import {
  Container,
  Button,
  Grid,
  Slider,
  Typography,
  Select,
  MenuItem,
  Input,
  TextField,
} from "@mui/material";

const EditPanel = ({ onChange, state, onSubmit, fetchData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state);
  }, [state]);

  const fonts = [
    { name: "Arial", value: "arial" },
    { name: "Verdana", value: "verdana" },
    { name: "Tahoma", value: "tahoma" },
    { name: "Trebuchet MS", value: "trebuchet ms" },
    { name: "Courier New", value: "courier new" },
  ];

  const [csv, setCSV] = React.useState(null);
  const [data, setData] = React.useState(null);

  useEffect(() => {
    if (csv) {
      csv.addEventListener("change", (ev) => {
        const file = ev.target.files[0];
        console.log(file);
        Papa.parse(file, {
          complete: function (results) {
            results.data.pop();
            console.log(results);
            setData(results);
            // let obj = getJSON(data);
            // fetchData(obj);
          },
        });

        console.log(data);
      });
    }
  }, [csv]);

  useEffect(() => {
    if (data) {
      console.log(data);
      let obj = getJSON(data);
      console.log(obj);
      fetchData(obj);
    }
  }, [data]);

  const getJSON = (data) => {
    // data.data.pop();
    const arr = {};
    console.log(data.data);

    data.data.map((item) => {
      console.log(item);

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
    // console.log(arr);
    return arr;
  };

  return (
    <div>
      {/* <h1>Editing Tab</h1> */}

      <TextField
        autoFocus
        margin="dense"
        id="resName"
        name="resName"
        label="Restaurant Name"
        type="resname"
        fullWidth
        variant="standard"
        onChange = {onChange}
      />

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

      <hr></hr>

      <Typography id="input-slider" gutterBottom>
        Heading Font Size
      </Typography>
      <Slider
        defaultValue={12}
        aria-label="headingFontSize"
        name="headingFontSize"
        valueLabelDisplay="auto"
        onChange={onChange}
      />
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Typography id="input-slider" gutterBottom>
        Text Font Family
      </Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state.heading.fontFamily}
        label="font-family"
        onChange={onChange}
        name="headingFontFamily"
      >
        {fonts.map((font) => {
          return <MenuItem value={font.value}>{font.name}</MenuItem>;
        })}
      </Select>
      <Typography id="input-slider" gutterBottom>
        Heading Font Color
      </Typography>

      <Grid container spacing={2}>
        <Grid item md={2}>
          <Typography id="input-slider" gutterBottom>
            R
          </Typography>
        </Grid>
        <Grid item md={7}>
          {/* <p>R</p> */}

          <Slider
            defaultValue={0}
            value={state.heading.color.r}
            aria-label="headingFontSize"
            name="headingFontColorR"
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.heading.color.r}
            size="small"
            name="headingFontColorR"
            onChange={onChange}
            //   onBlur={onChange}
            inputProps={{
              step: 5,
              min: 0,
              max: 255,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>

        <Grid item lg={3}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Typography id="input-slider" gutterBottom>
            G
          </Typography>
        </Grid>
        <Grid item md={7}>
          {/* <p>R</p> */}

          <Slider
            defaultValue={0}
            value={state.heading.color.g}
            aria-label="headingFontSize"
            name="headingFontColorG"
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.heading.color.g}
            size="small"
            name="headingFontColorG"
            onChange={onChange}
            //   onBlur={onChange}
            inputProps={{
              step: 5,
              min: 0,
              max: 255,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        {/* <hr></hr> */}
        {/* <p>G</p> */}
        <Grid item lg={3}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Typography id="input-slider" gutterBottom>
            B
          </Typography>
        </Grid>
        <Grid item md={7}>
          {/* <p>R</p> */}

          <Slider
            defaultValue={0}
            value={state.heading.color.b}
            aria-label="headingFontSize"
            name="headingFontColorB"
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.heading.color.b}
            size="small"
            name="headingFontColorB"
            onChange={onChange}
            //   onBlur={onChange}
            inputProps={{
              step: 5,
              min: 0,
              max: 255,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        {/* <hr></hr> */}
        {/* <p>G</p> */}
        <Grid item lg={3}></Grid>
      </Grid>
      <Button onClick={onSubmit} variant="contained">
        Create Menu
      </Button>
    </div>
  );
};

export default EditPanel;
