import { useDispatch } from "react-redux";
import classes from "./CartItems.module.css"
import { cartActions } from "../../store/cart-slice";

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
        <li className={classes.item}  id={id}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    <span className={classes.itemprice}>{total}</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x<span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItem}>-</button>
                    <button onClick={addItem}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItems;