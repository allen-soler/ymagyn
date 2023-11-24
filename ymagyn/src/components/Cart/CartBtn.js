import classes from "./CartBtn.module.css"

//Cart btn to add items or not 
const CartBtn = (props) => {
    return (
        <button className={classes.btn}>
            <span>My Cart</span>
            <span className={classes.badges}>1</span>
        </button>
    )
}

export default CartBtn;