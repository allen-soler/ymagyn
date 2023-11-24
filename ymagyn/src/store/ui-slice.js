import {createSlice} from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: 'ui',
    initialState: {CartIsOn: false},
    reducers: {
        toggle(state) {
            state.CartIsOn = !state.CartIsOn
        }
    }
})

export const uiActions = uiSlice.actions

export default uiSlice