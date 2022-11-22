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

      <hr></hr>

      <EditTypography
        type={"item_heading"}
        name={'Item Title'}
        onChange={onChange}
        state={state.item_heading}
        fonts={fonts}
      ></EditTypography>
      <Button onClick={onSubmit} variant="contained">
        Create Menu
      </Button>
    </div>
  );
};

export default EditPanel;
