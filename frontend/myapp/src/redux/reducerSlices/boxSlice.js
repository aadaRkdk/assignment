import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 90,
  height: 90,
  backGroundColor: "blue",
  borderRadius: "0%",
};

const boxSlice = createSlice({
  name: "box",
  initialState: initialState,
  reducers: {
    increaseWidth(state) {
      state.width = state.width + 4;
    },
    increaseHeight(state) {
      state.height = state.height + 4;
    },
    changeShape(state) {
      if (state.width === state.height) {
        state.borderRadius = "50%";
      } else {
        state.height = state.width;
        state.borderRadius = "50%";
      }
    },
    changeColor(state, actions) {
      state.backGroundColor = actions.payload;
    },
  },
});

export const { increaseWidth, increaseHeight, changeShape, changeColor } =
  boxSlice.actions;
export default boxSlice.reducer;
