import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartBtn from "../Cart/CartBtn";
import Stack from 'react-bootstrap/Stack';
import { userAction } from "../../store/user-slice";
import { cartActions } from "../../store/cart-slice";

const Header = () => {
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UserLogOut = () => {
        dispatch(userAction.setUserLogout());
        dispatch(cartActions.removeUserItem());
        navigate("/");

    };
    const expand = 'xxl';

    return (
        <Navbar fixed="top" key={expand} expand={expand} className="bg-body-tertiary mb-3" >
            <Container fluid>
                <Navbar.Brand >
                    <Nav.Link as={NavLink} to="/">
                        Happy Burgers
                    </Nav.Link>
                </Navbar.Brand>
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <CartBtn />
                    </div>
                    <div >
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            {/* <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header> */}
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                    {!user.isAuth && <Nav.Link as={NavLink} to="/login" >Login</Nav.Link>}
                                    {user.isAuth && <Nav.Link onClick={() => UserLogOut()} >Logout</Nav.Link>}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </Stack>
            </Container>
        </Navbar>
    );
}

export default Header;
//export default Header;