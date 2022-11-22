import axios from "axios";

const menus = (state = [], action) => {
  if (action.type === "SET_MENUS") {
    // console.log("here");
    // console.log(action.menu);
    return action.menus;
  }

  return state;
};



export const setMenu = (data) => {
  return async (dispatch) => {
    // const token = window.localStorage.getItem("token");
    // const response = await axios.get(`/api/restaurants/${id}`);
    dispatch({ type: "SET_MENU", menu: data });
  };
  //   { type: "SET_RESTUARANTS", restaurants: [] };
};


export const fetchMenus = () => {
  return async (dispatch) => {
    // console.log("here");
    const token = window.localStorage.getItem("token");
    if (token) {
      const response = await axios.get("/api/menus", {
        headers: {
          authorization: token,
        },
      });

      // console.log(response);
      dispatch({type:"SET_MENUS", menus: response.data})
    }
  };
};


export default menus;
