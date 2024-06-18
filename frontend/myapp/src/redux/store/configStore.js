// src/redux/store/configStore.js

import { user } from "@nextui-org/react";
import { configureStore, Tuple } from "@reduxjs/toolkit";
import boxSlice from "../reducerSlices/boxSlice";

const store = configureStore({
  reducer: {
    box: boxSlice,
  },
  // middleware: () => new Tuple(additionalMiddleware, logger),
});

export default store;
