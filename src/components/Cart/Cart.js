import { useDispatch, useSelector } from "react-redux"
import CartItems from "./CartItems"
import Container from "react-bootstrap/esm/Container"
import { Button, Stack } from "react-bootstrap";
import { cartActions } from "../../store/cart-slice";


const Cart = () => {
    const dispatch = useDispatch();
    const carItems = useSelector((state) => state.cart.items);

    const clearItemsHandler = () => {
        dispatch(cartActions.clearItems());
        localStorage.removeItem('anonymousCart');
    }
    return (
        <Container fluid  >
            <Stack direction="horizontal" gap={3} style={{ marginBottom: '5rem' }}>
                <div className="p-2">
                    <h2>Your Shopping Cart</h2>
                </div>
                <div className="p-2 ms-auto">
                    <Button variant="outline-primary" onClick={clearItemsHandler}>Clear Items</Button>
                </div>
            </Stack>
            {
                carItems.map((item) =>
                    <CartItems
                        key={item.id}
                        item={{
                            id: item.id,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                            img: item.img
                        }}
                    />
                )}
        </Container>
    )
}

export default Cart;