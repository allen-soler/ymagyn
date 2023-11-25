
import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Cart from "../components/Cart/Cart";

const Checkout = () => {
    return (
        <Fragment>
            <Layout>
                <Cart />
            </Layout>
        </Fragment>
    )
}

export default Checkout;