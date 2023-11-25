
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"
import Products from "./components/Products/Products";
import Notification from "./components/Notification/Notification";
import { fetchDataRequest, sendData } from "./store/ActionFetch";


let isInitial = true

const App = () => {
  const dispatch = useDispatch();
  const previewCart = useSelector(state => state.ui.CartIsOn);
  const cart = useSelector((state) => state.cart)
  const notification = useSelector(state => state.ui.notification)

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
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {previewCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App;
