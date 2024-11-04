import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Products} from "../../types";

interface CartProduct extends Products {
  quantity: number;
  color: string;
  id: number;
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
      const {id, color, quantity} = action.payload;
      const existingProduct = state.cartProduct.find(
          (p) => p.id === id && p.color === color
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cartProduct.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    removeFromCart: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const {id, color} = action.payload;
      state.cartProduct = state.cartProduct.filter(
          (product) => product.id !== id || product.color !== color
      );
      localStorage.setItem("cart", JSON.stringify(state.cartProduct));
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const {id, color} = action.payload;

      const product = state.cartProduct.find((p) => p.id === id && p.color === color);
      if (product) {
        product.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProduct));
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number; color: string }>) => {
      const {id, color} = action.payload;
      const product = state.cartProduct.find((p) => p.id === id && p.color === color);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartProduct));
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity,} = cartSlice.actions;

export const {reducer} = cartSlice;
