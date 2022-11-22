import axios from "axios";

const menu = (state = {}, action) => {
  if (action.type === "SET_MENU") {
    // console.log("here");
    // console.log(action.menu);
    return action.menu;
  }

  return state;
};

// export const fetchMenu = (id) => {
//   return async (dispatch) => {
//     // const token = window.localStorage.getItem("token");
//     const response = await axios.get(`/api/restaurants/${id}`);
//     console.log('here');
//     console.log(response.data.dishes);
//     dispatch({ type: "SET_MENU", menu: response.data.dishes });
//   };
//   //   { type: "SET_RESTUARANTS", restaurants: [] };
// };

export const setMenu = (data) => {
  return async (dispatch) => {
    // const token = window.localStorage.getItem("token");
    // const response = await axios.get(`/api/restaurants/${id}`);
    dispatch({ type: "SET_MENU", menu: data });
  };
  //   { type: "SET_RESTUARANTS", restaurants: [] };
};


export const createMenu = (data) => {
  return async (dispatch) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.post("/api/menu/create", data, {
        headers: {
          authorization: token,
        },
      });
    }
  };
};

export default menu;
