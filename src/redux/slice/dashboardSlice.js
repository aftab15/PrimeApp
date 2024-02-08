import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { role: "" },
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setState: (state, action) => {
      const newobj = {
        ...state,
        ...action.payload,
      };
      return newobj;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setState } = dashboardSlice.actions;

export default dashboardSlice.reducer;
