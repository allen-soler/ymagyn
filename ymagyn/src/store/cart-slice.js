import { createSlice } from "@reduxjs/toolkit"

//this reducer is to update the state of the store, we had functions to add and remove the card that will update the UI as well
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        userId: null,
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItems(state, action) {
            //first we received the new item thanks to the payload, and we check in the existing item if the item exist with id, if item exist it increase by the desire quanity
            const newItem = action.payload;

            const existingItem = state.items.find(item => item.id === newItem.id);

            if (newItem.userId) {
                state.userId = newItem.userId;
            }

            state.totalQuantity += 1;
            state.changed = true;
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice += newItem.price;
            }
            else {

                //this data is hardcore, neeed create a new firebase / or find api. 
                const { id, price, title, img } = newItem;

                state.items.push({
                    id: id,
                    price: price,
                    quantity: 1,
                    totalPrice: price,
                    name: title,
                    img: img
                });
            };
        },
        //here we received the id with the payload, and with existing item we find the items to be remove //item should always exist in this case
        removeItems(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            //if is 1 we remove it from the array if not we remove -1 and we rest the existingitem price as well
            state.totalQuantity -= 1;
            state.changed = true
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity -= 1;
                    existingItem.totalPrice -= existingItem.price;
                };
            };
        },
        removeUserItem(state, action) {
            state.userId = null;
            state.items = [];
            state.totalQuantity = 0;
            state.changed = true;
        }
    }
});


export const cartActions = cartSlice.actions;
export default cartSlice;