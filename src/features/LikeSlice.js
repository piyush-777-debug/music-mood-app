import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const likeslice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addbutton: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addbutton } = likeslice.actions;


export default likeslice.reducer;
