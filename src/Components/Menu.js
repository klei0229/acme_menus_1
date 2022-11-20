import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { logout, setMenu } from "../store";

import translate from "translate";

import { Container, Button, Grid } from "@mui/material";
import ImgMediaCard from "./MenuCard/ImgMediaCard";

// const { text } = await translate('Привет, мир! Как дела?', { to: 'en' });

// console.log(text) // => 'Hello World! How are you?'

import Resturants from "./Restaurants";

const Menu = ({state}) => {
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

  const [_menu, setMenu] = React.useState([]);
  
  useEffect(() => {
    // dispatch(fetchMenu(id));
    // test();
    console.log(state);
  }, [state]);

  useEffect(()=>{
    console.log(menu);

    // if(menu.length== 0){
    //   dispatch(setMenu());
    // }
    setMenu(menu)
  },[menu])

  return (
    <div>
      <Container maxWidth="xl">
        <h1>Menu</h1>
        <Grid container spacing={3}>
          {_menu.map((dish) => {
            return (
              <Grid item xl={4}>
                {/* {state.fontSize} */}
                <ImgMediaCard state={state} card={dish}/>
                
              </Grid>
            );
          })}
        </Grid>
        {/* {menu.length} */}

        {menu.map((dish) => {
          return (
            <div>
              <h3>{dish.name}</h3>
              <h3>{dish.secondaryname}</h3>
              <h3>{dish.description}</h3>
              <h3>{dish.price}</h3>
              <hr></hr>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Menu;
