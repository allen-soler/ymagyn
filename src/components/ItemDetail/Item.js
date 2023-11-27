import { Alert, Badge, Button, Card, Col, Container, ListGroup, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import { updateLocalStorage } from "../../store/ActionFetch";


const Item = (props) => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const product = useSelector((state) => state.products.items.find(item => item.id === props.id));

    if (!product) {
        // Handle the case where product is not found
        return (
            <Alert variant="danger">
                Product not found!
            </Alert>
        )
    }

    const { id, title, description, price, img, toppings, rating } = product;



    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                userId: user.id,
                id,
                title,
                price,
                description,
                img
            })
        )
        //if user is not online we saved it in local storage
        dispatch(updateLocalStorage());
    }
    return (
        <Container fluid  >
            <Stack direction="horizontal" gap={3} style={{ marginBottom: '5rem' }}>
                <div className="p-2">
                    <h2>{title}</h2>
                </div>
                <div className="p-2 ms-auto">
                    <NavLink
                        to="/"
                        className="btn btn-primary"
                    >
                        Back
                    </NavLink>
                </div>
            </Stack>
            <Card style={{ margin: '5rem auto' }}>
                <Row className="align-items-center">
                    <Col xs={3} md={3} sm={3}>
                        <Card.Img
                            src={img}
                            alt={title}
                            className="img-fluid d-block" // Make image responsive
                        />
                    </Col>
                    <Col xs={8} md={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Stack direction="horizontal" gap={3}>
                                    <div >
                                        <h5> {title}</h5>
                                    </div>
                                    <div >
                                        <h5> <Badge bg="secondary">{rating}</Badge></h5>
                                    </div>
                                </Stack>
                            </ListGroup.Item>
                            <ListGroup.Item>{description}</ListGroup.Item>
                            <ListGroup.Item>{toppings.join(", ")}</ListGroup.Item>
                            <ListGroup.Item>Price: CHF {price}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Stack direction="horizontal" gap={3} >
                                <div>
                                    <Button variant="outline-primary" onClick={addToCart}>Add to Cart</Button>
                                </div>
                                <div className="p-2 ">
                                    <NavLink
                                        to="/checkout"
                                        className="btn btn-primary"
                                    >
                                        Checkout
                                    </NavLink>
                                </div>
                            </Stack>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default Item;