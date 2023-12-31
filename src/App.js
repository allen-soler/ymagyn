
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, fetchFoodRequest, sendData } from "./store/ActionFetch";
import { Route, Routes } from "react-router-dom";

import { cartActions } from "./store/cart-slice";
import { userAction } from "./store/user-slice";
import { auth } from "./firebase/firebase-config";

import Index from "./page/Index";
import Checkout from "./page/Checkout";
import Login from "./page/Login";
import ItemDetails from "./page/ItemDetail";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user)

  //Check if user is online or not thanks to firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        dispatch(userAction.setUserLogin({
          id: currentUser.uid,
          email: currentUser.email,
        }));
      } else {
        const localCart = localStorage.getItem('anonymousCart');
        if (localCart) {
          const data = JSON.parse(localCart);
          dispatch(cartActions.replaceCart(data));
        }
        dispatch(userAction.setUserLogout());
      }
    }, []);

    return () => unsubscribe();
  }, [dispatch]);

  //sync cart and merge with localstorage offline cart
  useEffect(() => {
    if (user.isAuth) {
      dispatch(fetchCartData(user.id))
        .then(() => {
          // Check and merge local cart with fetched cart here
          const localCart = localStorage.getItem('anonymousCart');
          if (localCart) {
            const localCartData = JSON.parse(localCart);
            dispatch(cartActions.mergeCarts(localCartData));
            localStorage.removeItem('anonymousCart');
          }
        })
        .catch(error => {
          console.error("Error fetching user's cart:", error);
        });
    }
  }, [user.isAuth, user.id, dispatch]);


  // Fetch food products data on mount
  useEffect(() => {
    dispatch(fetchFoodRequest());
  }, [dispatch]);

  // Send cart data when cart changes, is initial change everytime there is a new item in the basket
  useEffect(() => {
    if (cart.changed && user.isAuth && user.id) {
      dispatch(sendData(cart, user.id));
    }
  }, [cart, user, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/item/:id' element={<ItemDetails />} />
      {!user.isAuth && <Route path='/login' element={<Login />} />}
      <Route path='/*' element={<Index />} />
    </Routes>
  )
}

export default App;
