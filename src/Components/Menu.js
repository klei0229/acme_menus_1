import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { logout, setMenu } from "../store";

import translate from "translate";

import { Container, Button, Grid, Paper, Typography } from "@mui/material";
import ImgMediaCard from "./MenuCard/ImgMediaCard";

// const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });

// console.log(text) // => 'Hello World! How are you?'

import Resturants from "./Restaurants";

const Menu = ({ state }) => {
  const { menu } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const refs = useRef([]);
  // async function test() {
  //   translate.engine = "deepl";
  //   // translate.key = process.env.DEEPL_KEY;
  //   translate.key = "169e6b4f-2e0a-838f-43ea-5b01f2c75ff7:fx";
  //   const text = await translate("Hello World", "es");
  // }

  // useEffect(()=>{
  //   setMenu(state.menu);
  // },[])

  const [_menu, setMenu] = React.useState({});

  useEffect(() => {
    // dispatch(fetchMenu(id));
    // test();
    setMenu(state.menu);
  }, [state]);

  const handleClick = (ev) => {
    // ref.current?.scrollIntoView({ behavior: "smooth" });
    refs.current[ev.target.value].scrollIntoView({ behavior: "smooth" });
  }
  // useEffect(() => {
  //   console.log(menu);

  //   // if(menu.length== 0){
  //   //   dispatch(setMenu());
  //   // }
  //   setMenu(menu);
  // }, [menu]);

  return (
    <div>
      <Container
        sx={{
          backgroundColor: "white",
        }}
        maxWidth="lg"
      >
        <Paper
          elevation="5"
          sx={{
            // minWidth: "1800px",
            // backgroundColor:'red'
            minWidth: "100%",
            // maxWidth: "75%vw"
          }}
        >
          <Container
            sx={
              {
                // backgroundColor:'green'
              }
            }
            align="center"
            maxWidth="lg"
          >
            {/* <h1>Menu</h1> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Typography
              variant="h1"
              sx={{
                fontSize: state.restaurant_name.fontSize,
                color: `rgb(${state.restaurant_name.color.r},${state.restaurant_name.color.g},${state.restaurant_name.color.b})`,
                fontFamily: state.restaurant_name.fontFamily,
              }}
            >
              {state.restaurantName}
            </Typography>
            <hr></hr>
            {/* <br></br> */}

            {/* //navbar */}
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {Object.keys(_menu).map((key, index) => {
                return (
                  <Button value={index} onClick={handleClick}>{key}</Button>
                );
              })}
            </Container>
            <hr></hr>

            {/* {console.log(_menu)} */}
            {Object.keys(_menu).map((key, index) => {
              return (
                <div key={index} 
                ref={(element)=>{
                  refs.current[index] = element
                }}>
                  {/* <h1>{key}</h1> */}
                  <Typography
                    sx={{
                      fontSize: state.categories.fontSize,
                      fontFamily: state.categories.fontFamily,
                      color: `rgb(${state.categories.color.r},${state.categories.color.g},${state.categories.color.b})`,
                    }}
                    variant="h4"
                    gutterBottom
                  >
                    {key}
                  </Typography>
                  <Grid container maxWidth="lg" spacing={3}>
                    {_menu[key].map((dish) => {
                      return (
                        <Grid item lg={4}>
                          <ImgMediaCard state={state} card={dish} />
                        </Grid>
                      );
                    })}
                  </Grid>
                  <br></br>
                </div>
              );
            })}
          </Container>
          <br></br>
          <br></br>
        </Paper>
      </Container>
    </div>
  );
};

export default Menu;
