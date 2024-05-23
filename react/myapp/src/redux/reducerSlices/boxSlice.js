import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  width: 90,
  height: 90,
  backGroundColor: "blue",
};

const boxSlice = createSlice({
  name: "box",
  initialState: initialState,
  reducers: {
    increaseWidth(state) {
      state.width = state.width + 1;
    },
  },
});

export const { increaseWidth } = boxSlice.actions;
export default boxSlice.reducer;
