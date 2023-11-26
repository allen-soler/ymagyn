//import { useState } from "react";
//import { useSelector } from "react-redux";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Header from "./Header";
//import Notification from "../Notification/Notification";
import Container from 'react-bootstrap/Container';


const Layout = (props) => {
    //const notification = useSelector(state => state.ui.notification);
    // const [show, setShow] = useState(true);

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container>
                <Header />
                {/* {notification && (
                    <Notification
                        status={notification.status}
                        title={notification.title}
                        message={notification.message}
                        show={show}
                    />
                )} */}
                <Container fluid style={{marginTop: '10rem'}}>
                    {props.children}
                </Container>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
