import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Products} from "../../types";

interface IInitialState {
  products: Products[]
}

const initialState: IInitialState = {
  products: JSON.parse(<string>localStorage.getItem("products")) || []
}

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<Products>) => {
      const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        state.products.push(action.payload);
      } else {
        state.products = state.products.filter((product) => product.id !== action.payload.id);
      }

      localStorage.setItem("products", JSON.stringify(state.products))
    }
  }
})

export const {reducer} = likeSlice
export const {addToLiked} = likeSlice.actions;
