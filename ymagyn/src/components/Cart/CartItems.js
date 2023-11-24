import classes from "./CartItems.module.css"

//popup to show items from the cart.
const CartItems = (props) => {
    console.log(props);
    const { title, quantity, total, price } = props.item;

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    <span className={classes.itemprice}>{props.price}</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x<span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItems;