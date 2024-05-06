import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storege";

interface Type {
  name: string;
  email: string;
  key: string;
  secret: string;
}

const initialState = loadState("user") || {
  user: [],
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      const user = state.user?.find(
        (item: Type) => item.email === action.payload.email
      );
      if (!user) {
        return {
          ...state,
          user: [
            ...state.user,
            {
              ...action.payload,
            },
          ],
        };
      }
      return state;
    },
  },
});
