import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import classes from "./CartBtn.module.css"

//Cart btn to add items or not 
const CartBtn = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const cartHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <button className={classes.btn} onClick={cartHandler}>
            <span>My Cart</span>
            <span className={classes.badges}>{totalQuantity}</span>
        </button>
    )
}

export default CartBtn;