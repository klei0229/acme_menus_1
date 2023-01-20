import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "../Menu";
import Home from "../Home";

// import PropTypes from "prop-types";

import { Divider } from "@mui/material";

import { setMenu } from "../../store/menu";

// ES modules
import * as ReactDOMServer from "react-dom/server";
// CommonJS
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useNavigate } from "react-router-dom";

export default function MenuCard(props) {
  let ReactDOMServer = require("react-dom/server");

  console.log(props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = props.props.id;
  const name = JSON.parse(props.props.data).restaurantName;
  const imageUrl = JSON.parse(props.props.data).imageURL;
  // const name2 = menuData.menuData;
  // const { card } = props;
  // console.log(name2);

  const handleView = () => {
    // console.log(JSON.parse(props.props.data));
    console.log('handle view')
    dispatch(setMenu(JSON.parse(props.props.data)));
    // let string = ReactDOMServer.renderToString(<Menu state={menu}></Menu>);
    navigate(`/menu/${id}`);
  };

  return (
    <div>
      <Card
        sx={
          {
            // minWidth: "100%",
            // backgroundColor: "blue",
          }
        }
      >
        <CardMedia
          component="img"
          // image="/static/images/cards/contemplative-reptile.jpg"

          width="200px"
          height="200px"
          object-fit="contain"
          // src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          src={imageUrl}
        />

        <CardContent>
          {/* HEADER TEXT*/}
          <Typography variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <Divider></Divider>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button size="small" onClick={handleView} href={`/#/menu/${id}`}>
            View
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
