import { useSelector } from "react-redux";
import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Products from "../components/Products/Products";

const Index = () => {
    const products = useSelector((state) => state.products);

    return (
        <Fragment>
            <Layout>
                <Products products={products.items} />
            </Layout>
        </Fragment>
    )
}

export default Index;