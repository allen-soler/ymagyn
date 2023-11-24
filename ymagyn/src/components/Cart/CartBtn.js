import { useDispatch } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import classes from "./CartBtn.module.css"

//Cart btn to add items or not 
const CartBtn = (props) => {
    const dispatch = useDispatch();

    const cartHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <button className={classes.btn} onClick={cartHandler}>
            <span>My Cart</span>
            <span className={classes.badges}>1</span>
        </button>
    )
}

export default CartBtn;