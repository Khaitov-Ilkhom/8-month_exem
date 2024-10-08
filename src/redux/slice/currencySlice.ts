import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  currency: localStorage.getItem("currency") || "",
}

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeCurrency: (state, action : PayloadAction<string>) => {
      state.currency = action.payload
      localStorage.setItem("currency", state.currency)
    }
  }
})

export const {reducer} = currencySlice
export const {changeCurrency} = currencySlice.actions