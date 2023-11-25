import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { cartActions } from "../../store/cart-slice";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Stack from "react-bootstrap/esm/Stack";
import Badge from 'react-bootstrap/Badge';

//popup to show items from the cart.
const CartItems = (props) => {
    const dispatch = useDispatch();
    const placeholderImage = 'https://via.placeholder.com/75';

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
        <Card style={{ width: '50%', margin: '5rem 0' }}>
            <Row >
                <Col md={4}>
                    <Card.Img variant="top" src={placeholderImage}
                        style={{ 'width': '100%' }}
                    />
                </Col>
                <Col md={8} >
                    <Row  style={{ 'height': '100%' }} className="align-items-center">
                        <Col  >
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <Card.Title><Badge bg="secondary">{quantity}</Badge> {title.toUpperCase()}</Card.Title>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price : CHF {price}
                                </ListGroup.Item>
                                <ListGroup.Item>Total : CHF {total}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col  className="d-sm-block"> 
                            <Card.Body>
                                <Stack direction="horizontal" gap={3} >
                                    <div>
                                        <Button onClick={removeItem}>-</Button>
                                    </div>
                                    <div>
                                        <Button onClick={addItem}>+</Button>
                                    </div>
                                </Stack>
                            </Card.Body>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default CartItems;