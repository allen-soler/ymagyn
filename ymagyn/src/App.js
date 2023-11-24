
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"
import Products from "./components/Products/Products";

const App = () => {
  const previewCart = useSelector(state => state.ui.CartIsOn);

  return (
    <Layout>
      {previewCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App;
