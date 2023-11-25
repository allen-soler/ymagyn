
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"
import Products from "./components/Products/Products";
import Notification from "./components/Notification/Notification";
import { Fragment, useEffect } from "react";
import { sendData } from "./store/ActionFetch";


let isInitial = true

const App = () => {
  const dispatch = useDispatch();
  const previewCart = useSelector(state => state.ui.CartIsOn);
  const cart = useSelector((state) => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return;
    }
    dispatch(sendData(cart))

  }, [cart, dispatch])
  
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
