
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, fetchFoodRequest, sendData } from "./store/ActionFetch";
import { Route, Routes } from "react-router-dom";

import { cartActions } from "./store/cart-slice";
import { userAction } from "./store/user-slice";
import { auth } from "./firebase/firebase-config";

import Index from "./page/Index";
import Checkout from "./page/Checkout";
import Login from "./page/Login";


const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user)
  const [isInitial, setIsInitial] = useState(true);

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
    if (isInitial) {
      setIsInitial(false); // Set isInitial to false after first run
      return;
    }
    //everytime we change the cart, we update the db
    if (cart.changed && user.isAuth) {
      dispatch(sendData(cart));
    }
  }, [cart, isInitial, dispatch, user.isAuth]);

  return (
    <Routes basename="/ymagyn">
      <Route path='/' element={<Index />} />
      <Route path='/Checkout' element={<Checkout />} />
      {!user.isAuth && <Route path='/login' element={<Login />} />}
      <Route path='*' element={<Index />} />
    </Routes>
  )
}

export default App;
