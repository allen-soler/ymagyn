import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/ui-slice"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

//Cart btn to add items or not 
const CartBtn = () => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    const cartHandler = () => {
        dispatch(uiActions.toggle())
    }

    return (
        <Button variant="outline-primary" onClick={cartHandler}>
                My Cart <Badge bg="primary">{totalQuantity}</Badge>
        </Button>
    )
}

export default CartBtn;