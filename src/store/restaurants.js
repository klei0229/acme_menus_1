import axios from "axios";

const restaurants = (state = [], action) => {
  if (action.type === "SET_RESTAURANTS") {
    console.log(action.restaurants);
    return action.restaurants;
  }
  //   console.log(state);
  return state;
};

export const fetchRestaurants = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    const response = await axios.get("/api/restaurants", {
      headers: {
        authorization: token,
      },
    });
    // console.log(response.data);
    dispatch({ type: "SET_RESTAURANTS", restaurants: response.data });
  };
  //   { type: "SET_RESTUARANTS", restaurants: [] };
};


export default restaurants;
