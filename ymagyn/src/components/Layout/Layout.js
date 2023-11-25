import { useSelector } from "react-redux";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Header from "./Header";
import Notification from "../Notification/Notification";
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    const notification = useSelector(state => state.ui.notification);

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Container>
                <Header />
                {notification && (
                    <Notification
                        status={notification.status}
                        title={notification.title}
                        message={notification.message}
                    />
                )}
                <Container fluid>
                    {props.children}
                </Container>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
