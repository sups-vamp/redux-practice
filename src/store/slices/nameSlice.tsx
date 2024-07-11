import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the state
type NameState = string[];

// Create the slice
const nameSlice = createSlice({
  name: 'name',
  initialState: [] as NameState,
  reducers: {
    addUser(state, action: PayloadAction<string>) {
      state.push(action.payload);
    },
    removeUser(state, action: PayloadAction<any>) {
      state.splice(action.payload.pos, 1);
    },
    deleteAllUsers(state) {
      return [];
    }
  }
});

export { nameSlice };
