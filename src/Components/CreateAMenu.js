import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRestaurants } from "../store";
// import { logout } from '../store';

//mui
import { Container, Button } from "@mui/material";

const CreateAMenu = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Create A Menu</h1>
      <Container maxWidth="lg"></Container>
    </div>
  );
};

export default CreateAMenu;
