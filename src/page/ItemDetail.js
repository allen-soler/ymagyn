import { Fragment } from "react";
import Layout from "../components/Layout/Layout";
import Item from "../components/ItemDetail/Item";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
    const {id} = useParams();

  
    return (
        <Fragment>
            <Layout>
                <Item id={id} />
            </Layout>
        </Fragment>
    )
}

export default ItemDetails;