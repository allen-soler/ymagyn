//Creating a thunk for mananging fetching data

import { uiActions } from "./ui-slice"


//function to send card data // There is no authentication, need to be add, like users.
export const sendData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data!'
            })
        )
        const sendRequest = async () => {
            const response = await fetch('https://ymagyn-b7db1-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            })
            if (!response.ok) {
                throw new Error('Sending data failedƒ')
            }
        }
        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sending cart data succesful.'
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            )
        }
    }
}