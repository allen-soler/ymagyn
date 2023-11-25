import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice"

const URL_DB = 'https://ymagyn-b7db1-default-rtdb.europe-west1.firebasedatabase.app/cart.json';

//Creating a thunk for mananging fetching data
//function to fetch data, first we check if the response work if not we send a notification.
//Also we use replace cart reducer to update the basket if there are items.
export const fetchDataRequest = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(URL_DB);

            if (!response.ok)
                throw new Error('Error fetching the data');

            const data = await response.json();

            return data;
        };

        try {
            const data = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: data.items || [],
                    totalQuantity: data.totalQuantity
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        };
    };
};

//function to send card data // There is no authentication, need to be add, like users.
export const sendData = (cart) => {
    return async (dispatch) => {
        console.log(cart);
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data!'
            })
        );
        const sendRequest = async () => {
            const response = await fetch(URL_DB, {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                }),
            });
            if (!response.ok) {
                throw new Error('Sending data failedƒ');
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sending cart data succesful.'
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            );
        };
    };
};