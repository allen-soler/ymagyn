import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./ProductItem.module.css"

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { title, price, description, id, img, topping } = props;

    const addToCart = () => {
        dispatch(
            cartActions.addItems({
                id,
                title,
                price,
                description
            })
        )
    }
    // Placeholder image URL
    //const placeholderImage = 'https://via.placeholder.com/150';

    return (
        <Card className="card" >
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body className="card-body">
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className={`card-text ${classes['card-text']}`}>{description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: {price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link className="btn btn-primary" onClick={addToCart}>Add to Cart</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default ProductItem;
