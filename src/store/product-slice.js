import { createSlice } from "@reduxjs/toolkit"

//this reducer is to update the state of the store, we had functions to add and remove the card that will update the UI as well
const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
    },
    reducers: {
        addItems(state, action) {
            state.items = action.payload;
        }
    }
});


export const productActions = productSlice.actions;
export default productSlice;