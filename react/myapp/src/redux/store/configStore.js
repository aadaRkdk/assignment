import { user } from "@nextui-org/react";
import { configureStore } from "@reduxjs/toolkit";
import boxSlice from "../reducerSlices/boxSlice";

const store = configureStore({
  reducer: {
    box: boxSlice,
  },
});

export default store;
