import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
import InputSlider from "./InputSlider";
// import { logout } from '../store';

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
} from "@mui/material";

const EditPanel = ({ onChange, state }) => {
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

  return (
    <div>
      <h1>Editing Tab</h1>
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
    </div>
  );
};

export default EditPanel;
