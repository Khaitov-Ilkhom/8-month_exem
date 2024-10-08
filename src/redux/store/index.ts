import {configureStore} from "@reduxjs/toolkit";
import {api} from "../api";
// import {reducer as cartSlice} from "../slice/cartSlice.ts";
import {reducer as likeSlice} from "../slice/likedSlice.ts"

const store = configureStore({
  reducer: {
    // cart: cartSlice,
    like: likeSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store