import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { cartActions } from "../../store/cart-slice";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Badge from 'react-bootstrap/Badge';

//popup to show items from the cart.
const CartItems = (props) => {
    const dispatch = useDispatch();
    const { id, title, quantity, total, price } = props.item;

    const addItem = () => {
        dispatch(cartActions.addItems({
            id,
            price,
            title,
            total,
        }))
    }

    const removeItem = () => {
        dispatch(cartActions.removeItems(id))
    }

    return (
        <Card style={{ width: '80%', margin: '3rem auto' }}>
            <Row className="align-items-center">
                <Col xs={3} md={3} sm={3}>
                    <Card.Img
                        src="https://via.placeholder.com/75"
                        alt={title}
                        className="img-fluid d-block" // Make image responsive
                    />
                </Col>
                <Col xs={8} md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h5>{title}</h5>
                            <Badge bg="secondary">{quantity}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item>Price: CHF {price}</ListGroup.Item>
                        <ListGroup.Item>Total: CHF {total}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="outline-primary" onClick={removeItem} className="me-2">-</Button>
                        <Button variant="outline-primary" onClick={addItem}>+</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default CartItems;
