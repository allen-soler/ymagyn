import {  useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


//Cart btn to add items or not 
const CartBtn = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)

    return (
        <Button variant="outline-primary">
            <Nav.Link as={NavLink} to="/Checkout">
                My Cart <Badge bg="primary">{totalQuantity}</Badge>
            </Nav.Link>
        </Button>
    )
}

export default CartBtn;