import React, { useEffect } from "react";
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
  console.log(menu);

  // async function test() {
  //   translate.engine = "deepl";
  //   // translate.key = process.env.DEEPL_KEY;
  //   translate.key = "169e6b4f-2e0a-838f-43ea-5b01f2c75ff7:fx";
  //   const text = await translate("Hello World", "es");
  //   console.log(text);
  // }

  const [_menu, setMenu] = React.useState({});

  useEffect(() => {
    // dispatch(fetchMenu(id));
    // test();
    console.log(state);
    setMenu(state.menu);

  }, [state]);

  useEffect(() => {
    console.log(menu);

    // if(menu.length== 0){
    //   dispatch(setMenu());
    // }
    setMenu(menu);
  }, [menu]);

  return (
    <div>
      <Paper elevation='5'
        sx={{
          minWidth: "1800px",
          // backgroundColor:'red'
        }}
      >
        <Container
          sx={
            {
              // backgroundColor:'green'
            }
          }
          align="center"
          maxWidth="xl"
        >
          {/* <h1>Menu</h1> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Typography variant='h1'>
            {state.restaurantName}
          </Typography>
          <hr></hr>
          <br></br>
          {Object.keys(_menu).map((key, index) => {
            return (
              <div>
          
                <h1>{key}</h1>
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
    </div>
  );
};

export default Menu;
