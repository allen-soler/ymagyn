
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"

const App = () => {
  const previewCart = useSelector(state => state.ui.CartIsOn);

  return (
    <Layout>
      {previewCart && <Cart />}
    </Layout>
  )
}

export default App;
