import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import PropTypes from "prop-types";

import { Divider } from "@mui/material";

import { setMenu } from '../../store/menu';
// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import { useNavigate } from "react-router-dom";

export default function MenuCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = props.props.id;
  const name = JSON.parse(props.props.data).restaurantName;
  // const name2 = menuData.menuData;
  // const { card } = props;
  // console.log(name2);

const handleView = () => {

  // console.log(JSON.parse(props.props.data));
  dispatch(setMenu(JSON.parse(props.props.data)));
  navigate(`/menu/${id}`);
}

  return (
    <div>
      <Card
        sx={{
          // minWidth: "100%",
          // backgroundColor: "blue",
        }}
      >
        <CardMedia
          component="img"
          // image="/static/images/cards/contemplative-reptile.jpg"
          // maxWidth="100px"
          maxHeight="50px"
          object-fit="contain"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
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
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
