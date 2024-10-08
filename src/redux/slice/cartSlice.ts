// import {createSlice} from "@reduxjs/toolkit";
// import {Products} from "../../types";
//
// interface IInitialState {
//   cartProducts: Products[]
// }
//
// const initialState: IInitialState = {
//   cartProducts: JSON.parse(<string>localStorage.getItem("cart")) || [],
// }
//
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, {payload}) => {
//       const checkProductAlreadyExist = state.cartProducts.findIndex(product => product.id === payload.id);
//       if (checkProductAlreadyExist === -1) {
//         state.cartProducts.push(payload)
//       } else {
//         state.cartProducts = state.cartProducts.map(product => {
//           if (product.id === payload.id) {
//             product.quantity = product.quantity + payload.quantity
//           }
//           return product
//         })
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartProducts))
//     },
//     removeFromCart: (state, {payload}) => {
//       if (payload.quantity) {
//         state.cartProducts = state.cartProducts.map(product => {
//           if (product.id === payload.id) {
//             product.quantity = product.quantity - 1
//           }
//           return product
//         })
//       } else {
//         state.cartProducts = state.cartProducts.filter(product => product.id !== payload.id)
//       }
//       localStorage.setItem("cart", JSON.stringify(state.cartProducts))
//     }
//   }
// })
//
// export const {reducer} = cartSlice
// export const {addToCart, removeFromCart} = cartSlice.actions