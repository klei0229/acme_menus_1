import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
// import { logout } from '../store';

//mui
import { Container, Button } from "@mui/material";

const Restaurants = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state);
  // console.log(restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants());
    // setRestaurants(restaurants);
  }, []);

  return (
    <div>
      <Container maxWidth="lg">
        <h1>My Restaurants</h1>
        {/* {restaurants.length} */}
        {restaurants.map((restaurant) => {
          return (
            <div>
              {restaurant.name}
              <Button href={`#/menu/${restaurant.id}`}>See Menu</Button>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Restaurants;
