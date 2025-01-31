import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "../features/sideBarSlice";

// Define the store
const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
