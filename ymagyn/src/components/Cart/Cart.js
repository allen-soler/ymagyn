import Card from "../UI/Card"
import CartItems from "./CartItems"
import classes from "./Cart.module.css"


const Cart = (props) => {
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                <CartItems 
                item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
                />
            </ul>
        </Card>
    )
}

export default Cart;