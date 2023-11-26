
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodRequest, sendData } from "./store/ActionFetch";
import { Route, Routes } from "react-router-dom";
import Index from "./page/Index";
import Checkout from "./page/Checkout";
import Login from "./page/Login";

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user)
  const [isInitial, setIsInitial] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchFoodRequest());
  }, [dispatch]);

  // Send cart data when cart changes
  useEffect(() => {
    if (isInitial) {
      setIsInitial(false); // Set isInitial to false after first run
      return;
    }
    if (cart.changed) {
      dispatch(sendData(cart));
    }
  }, [cart, isInitial, dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/Checkout' element={<Checkout />} />
      {!user.isAuth && <Route path='/login' element={<Login />} />}
      <Route path='*' element={<Index />} />
    </Routes>
  )
}

export default App;
