import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomID: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state,actions) => {
      state.roomID = actions.payload.roomID;
    },
    exitRoom: (state) => {
      state.roomID = null;
    }
  },
});

export const { enterRoom , exitRoom } = appSlice.actions;

export const selectRoomID = (state) => state.app.roomID;

export default appSlice.reducer;
