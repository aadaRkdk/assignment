"use client";

import { Provider } from "react-redux";

import store from "./store/configStore";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
