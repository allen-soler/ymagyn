import { createSlice } from "@reduxjs/toolkit"

//Ui slice for show/hide cart and notifications if there is an error. some validation data
const uiSlice = createSlice({
    name: 'ui',
    initialState: { CartIsOn: false, notification: null },
    reducers: {
        toggle(state) {
            state.CartIsOn = !state.CartIsOn
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;