import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: null,
        email: null,
        isAuth: false,
    },
    reducers: {
        setUserLogin: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email;
            state.isAuth = true;
        },
        setUserLogout: (state) => {
            state.id = null;
            state.email = null;
            state.isAuth = false;
        },
    }
});

export const userAction = userSlice.actions;

export default userSlice;