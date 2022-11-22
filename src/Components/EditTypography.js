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

const EditTypography = ({type,onChange, state,fonts,name}) => {
  return (
    <div>
              {/* <Typography variant='h6' id="input-slider" gutterBottom>
        // {name}
      </Typography> */}
        {/* {type} */}
      <Typography id="input-slider" gutterBottom>
        Font Size
      </Typography>
      <Slider
        defaultValue={state.fontSize}
        aria-label="item_headingFontSize"
        name={`${type}FontSize`}
        // "item_headingFontSize"
        valueLabelDisplay="auto"
        onChange={onChange}
        max={150}
      />
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Typography id="input-slider" gutterBottom>
        Font Family
      </Typography>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={state.fontFamily}
        label="font-family"
        onChange={onChange}
        // name="item_headingFontFamily"
        name={`${type}FontFamily`}
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
            value={state.color.r}
            aria-label="item_headingFontSize"
            name={`${type}FontColorR`}
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.color.r}
            size="small"
            // name="item_headingFontColorR"
            name={`${type}FontColorR`}
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
            value={state.color.g}
            aria-label="item_headingFontSize"
            name={`${type}FontColorG`}
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.color.g}
            size="small"
            name={`${type}FontColorG`}
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
            value={state.color.b}
            aria-label="item_headingFontSize"
            name={`${type}FontColorB`}
            valueLabelDisplay="auto"
            onChange={onChange}
            max={255}
            min={0}
          />
        </Grid>
        <Grid item md={3}>
          <Input
            value={state.color.b}
            size="small"
            name={`${type}FontColorB`}
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

export default EditTypography;
