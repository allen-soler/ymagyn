
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest, sendData } from "./store/ActionFetch";
import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import Checkout from "./page/Checkout";
let isInitial = true

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)

  //this one is to call the api and check if there are items or not in the cart
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Checkout' element={<Checkout />} />
      <Route path='*' element={<Index />} />
    </Routes>
  )
}

export default App;
