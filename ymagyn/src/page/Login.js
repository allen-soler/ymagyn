import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Login from "../components/Users/UserLogin";

const Index = () => {

    return (
        <Fragment>
            <Layout>
                <Login />
            </Layout>
        </Fragment>
    )
}

export default Index;