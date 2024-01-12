import { configureStore, createSlice } from "@reduxjs/toolkit";

const leftsideBarSlice = createSlice({
    name: 'lsbar',
    initialState: { barCount : 1 },
    reducers: {
        msgList(state) {state.barCount = 1},
        callList(state) {state.barCount = 2},
        friendList(state) {state.barCount = 3},
    }
});

const mainBarSlice = createSlice({
    name: 'mainbar',
    initialState: { mainbarCount : 1 },
    reducers: {
        activeFriendBox(state) {state.mainbarCount = 1},
        messageBox(state) {state.mainbarCount = 2},
    }
});

const store = configureStore({
    reducer: {
        lsbar: leftsideBarSlice.reducer,
        mainbar: mainBarSlice.reducer,
    }
});

export const leftbar = leftsideBarSlice.actions;
export const mainbar = mainBarSlice.actions;
export default store;
