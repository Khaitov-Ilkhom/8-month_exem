import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {Products} from "../../types";

interface CartProduct extends Products {
  quantity: number;
  color: string
}

interface IInitialState {
  cartProduct: CartProduct[];
}

const initialState: IInitialState = {
  cartProduct: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.cartProduct.find(
          (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cartProduct.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartProduct = state.cartProduct.filter(
          (product) => product.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cartProduct.find((p) => p.id === action.payload);
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProduct));
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const product = state.cartProduct.find((p) => p.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProduct));
      }
    },
  },
});

export const selectCartProductById = (state: RootState, productId: number) =>
    state.cart.cartProduct.find((product) => product.id === productId);

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity,} = cartSlice.actions;

export const {reducer} = cartSlice ;
