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
  console.log(props);
  console.log(props.state.fontSize);
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
    console.log(props.state.fontSize);
  }, [props]);

  function fetchWiki() {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "opensearch",
      search: "tide",
      limit: "5",
      namespace: "0",
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
      url += "&" + key + "=" + params[key];
    });
    console.log(url);
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        // image="/static/images/cards/contemplative-reptile.jpg"
        height="250px"
        object-fit="cover"
        src={card.image}
      />

      <CardContent>
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
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" onClick={handleClickOpen}>
          Learn More
        </Button>
        <Typography variant="body2" color="text.secondary">
          $ {card.price}
        </Typography>
        <Button variant='contained' size="small" onClick={handleClickOpen}>
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
