import { cartActions } from "./cart-slice";
import { productActions } from "./product-slice";
import { uiActions } from "./ui-slice"

const URL_CART = 'https://ymagyn-b7db1-default-rtdb.europe-west1.firebasedatabase.app/cart.json';
const URL_PRODUCTS = 'https://ymagyn-b7db1-default-rtdb.europe-west1.firebasedatabase.app/products.json';

//Creating a thunk for mananging fetching data
//function to fetch data, first we check if the response work if not we send a notification.
//Also we use replace cart reducer to update the basket if there are items.
export const fetchFoodRequest = () => {

    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(URL_PRODUCTS);

            if (!response.ok)
                throw new Error('Error fetching the data');

            const data = await response.json();

            return data;
        };

        try {
            const data = await fetchData();
            dispatch(
                productActions.addItems(data || [])
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

//this function is to fetch the cart data
export const fetchCartData = (userId) => {
    const URL_PATCH = `${URL_CART}?${userId}`;
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(URL_PATCH);
                if (!response.ok) {
                    throw new Error('Error fetching the data');
                }
                const data = await response.json();

                // Check if data and data.items are not null
                if (data && data.items) {
                    // Update the Redux store with fetched cart items
                    dispatch(cartActions.replaceCart({
                        items: data.items,
                        totalQuantity: data.totalQuantity || 0
                    }));
                } else {
                    // if data or data.items are null
                    dispatch(cartActions.replaceCart({
                        items: [],
                        totalQuantity: 0
                    }));
                }

                resolve(data); // Resolve the promise with the fetched cart data
            } catch (error) {
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!'
                }));
                reject(error);
            }
        });
    };
};



//function to send card data // There is no authentication, need to be add, like users.
export const sendData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending',
                message: 'Sending cart data!'
            })
        );
        const sendRequest = async () => {
            const response = await fetch(URL_CART, {
                method: 'PUT',
                body: JSON.stringify({
                    userId: cart.userId,
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