import { useSelector } from "react-redux"
import CartItems from "./CartItems"
import Container from "react-bootstrap/esm/Container"


const Cart = () => {
    const carItems = useSelector((state) => state.cart.items);

    return (
        <Container fluid  > {/* Adjust the value to match your navbar's height */}
            <h2 style={{ marginBottom: '5rem' }}>Your Shopping Cart</h2>
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