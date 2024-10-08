import {configureStore} from "@reduxjs/toolkit";
import {api} from "../api";
import {reducer as cartSlice} from "../slice/cartSlice.ts";
import {reducer as likeSlice} from "../slice/likedSlice.ts"
import {reducer as currencySlice} from "../slice/currencySlice.ts";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    like: likeSlice,
    currency: currencySlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
      || getDefaultMiddleware({serializableCheck: false}),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store