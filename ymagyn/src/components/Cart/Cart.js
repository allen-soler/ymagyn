import { useSelector } from "react-redux"

import Card from "../UI/Card"
import CartItems from "./CartItems"
import classes from "./Cart.module.css"


const Cart = () => {
    const carItems = useSelector((state) => state.cart.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {
                    carItems.map((item) =>
                        <CartItems
                            key={item.id}
                            item={{ id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price }}
                        />
                    )}
            </ul>
        </Card>
    )
}

export default Cart;