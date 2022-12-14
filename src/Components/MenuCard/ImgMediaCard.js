import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { Divider } from "@mui/material";

// import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

export default function ImgMediaCard(props) {
  const { card } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    // fetchWiki();
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
  }, [props]);

 
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        // image="/static/images/cards/contemplative-reptile.jpg"
        height="250px"
        object-fit="cover"
        src={card.image}
      />

      <CardContent sx={{
        // minHeight: 200
        minHeight:props.state.descriptions.minHeight
      }}>
        {/* HEADER TEXT*/}
        <Typography
          sx={{
            fontSize: props.state.item_heading.fontSize,
            fontFamily: props.state.item_heading.fontFamily,
            color: `rgb(${props.state.item_heading.color.r},${props.state.item_heading.color.g},${props.state.item_heading.color.b})`
          }}
          variant="h5"
          component="div"
        >
          {card.name}
        </Typography>
        <Typography color="secondary" gutterBottom variant="h6" component="div">
          {card.secondaryname}
        </Typography>
        <Typography
          sx={{
            // fontSize: props.state.fontSize,
            // fontFamily: props.state.item_heading.fontFamily,
            fontSize: props.state.descriptions.fontSize,
            fontFamily: props.state.descriptions.fontFamily,
            color: `rgb(${props.state.descriptions.color.r},${props.state.descriptions.color.g},${props.state.descriptions.color.b})`

          }}
          variant="body2"
          color="text.secondary"
        >
          {/* {props.state.fontSize} */}
          {card.description}
        </Typography>
        <Typography
          // sx={{ fontFamily: props.state.item_heading.FontFamily }}
          variant="body2"
          color="text.secondary"
        >
          {/* {card.price} */}
        </Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions display='flex' sx={{
        backgroundColor:"aliceblue",
        justifyContent:'space-around'
      }}>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small" onClick={handleClickOpen}>
          Learn More
        </Button> */}
        <Typography variant="body2" color="text.secondary">
          PRICE: {card.price}
        </Typography>
        <Button  size="small" onClick={handleClickOpen}>
          Add To Order
        </Button>
        <Dialog
          open={open}
          // TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"More Information"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {/* <Typography variant="body2" color="text.secondary">
                More Information
              </Typography> */}

              {/* <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/scRPBgARnaM?start=10"
                title="Episode 8: Har Gow"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    secondaryname: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  state: PropTypes.object,
};
