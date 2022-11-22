import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
import InputSlider from "./InputSlider";
// import { logout } from '../store';
import Papa from "papaparse";
import EditTypography from "./EditTypography";

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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const EditPanel = ({ onChange, state, onSubmit, fetchData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
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
        Papa.parse(file, {
          complete: function (results) {
            results.data.pop();
            setData(results);
            // let obj = getJSON(data);
            // fetchData(obj);
          },
        });

      });
    }
  }, [csv]);

  useEffect(() => {
    if (data) {
      let obj = getJSON(data);
      fetchData(obj);
    }
  }, [data]);

  const getJSON = (data) => {
    // data.data.pop();
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
        onChange={onChange}
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
      <Accordion>
        <AccordionSummary sx={{ backgroundColor: "aliceblue" }}>
          <Typography variant="h6">Restaurant Name</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditTypography
            type={"restaurant_name"}
            name={"Restaurant Name"}
            onChange={onChange}
            state={state.restaurant_name}
            fonts={fonts}
          ></EditTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion disableGutters="true">
        <AccordionSummary sx={{ backgroundColor: "aliceblue" }}>
          <Typography variant="h6">Menu Item Heading</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditTypography
            type={"item_heading"}
            name={"Item Title"}
            onChange={onChange}
            state={state.item_heading}
            fonts={fonts}
          ></EditTypography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary sx={{ backgroundColor: "aliceblue" }}>
          <Typography variant="h6">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditTypography
            type={"categories"}
            name={"Categories"}
            onChange={onChange}
            state={state.categories}
            fonts={fonts}
          ></EditTypography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary sx={{ backgroundColor: "aliceblue" }}>
          <Typography variant="h6">Descriptions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EditTypography
            type={"descriptions"}
            name={"Descriptions"}
            onChange={onChange}
            state={state.descriptions}
            fonts={fonts}
          ></EditTypography>
          <Typography id="input-slider" gutterBottom>
            Description Min Height
          </Typography>
          <Slider
            defaultValue={state.descriptions.minHeight}
            aria-label="descriptionsMinHeight"
            name={`descriptionsMinHeight`}
            // "item_headingFontSize"
            valueLabelDisplay="auto"
            onChange={onChange}
            max={350}
          />
        </AccordionDetails>
      </Accordion>

      <Button onClick={onSubmit} variant="contained">
        Create Menu
      </Button>
    </div>
  );
};

export default EditPanel;
