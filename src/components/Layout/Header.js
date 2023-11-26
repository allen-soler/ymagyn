import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartBtn from "../Cart/CartBtn";
import Stack from 'react-bootstrap/Stack';
import { userAction } from "../../store/user-slice";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";

const Header = () => {
    const user = useSelector((state) => state.user)
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UserLogOut = async () => {

        try {
            // Now log the user out
            await signOut(getAuth());
        } catch (error) {
            console.error("Logout failed: ", error);
        }
        dispatch(userAction.setUserLogout());
        dispatch(cartActions.removeUserItem());
        navigate("/home");
    };

    //when we are on burger menu and we click home and we are already in home it close
    const navLinkHandler = () => {
        setExpanded(false);
    }

    const expand = 'xxl';

    return (
        <Navbar fixed="top" key={expand} expand={expand} expanded={expanded} className="bg-body-tertiary mb-3">
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
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                            onClick={() => setExpanded(prevExpanded => !prevExpanded)}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Happy Burgers
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Navbar.Collapse>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link as={NavLink} onClick={navLinkHandler} to="/home" >Home</Nav.Link>
                                        {!user.isAuth && <Nav.Link as={NavLink} to="/login" onClick={navLinkHandler} >Login</Nav.Link>}
                                        {user.isAuth && <Nav.Link onClick={() => { UserLogOut(); navLinkHandler(); }} >Logout</Nav.Link>}

                                    </Nav>
                                </Navbar.Collapse>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                </Stack>
            </Container>
        </Navbar>
    );
}

export default Header;