import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "false",
    userData: null
}

const authSLice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout:(state) => {
            state.status = false;
            state.userData = null;
        }

    }
});

export const {login, logout} = authSLice.actions;

export default authSLice.reducer;

