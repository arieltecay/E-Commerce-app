import { CART_ADD_ITEM } from "../constants/CartConstants";
import Axios from "axios";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      image: data.image,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
