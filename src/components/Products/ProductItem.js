import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./ProductItem.module.css"

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const { title, price, description, id, img } = props;

    const addToCart = () => {
        dispatch(
            cartActions.addItems({
                userId: user.id,
                id,
                title,
                price,
                description,
                img
            })
        )
    }

    return (
        <Card className="card" >
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body className={`card-body ${classes['card-body']}`}>
                <Card.Title className="card-title">{title.toUpperCase()}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className={`card-text ${classes['card-text']}`}>
                    {description}
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className="fw-bold">Price :</span> CHF {price}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link className="btn btn-primary" onClick={addToCart}>Add to Cart</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
