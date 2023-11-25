import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Header from "./Header";

const Layout = (props) => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Header />
            <main className="container	">{props.children}</main>
        </ThemeProvider>
    )
}

export default Layout;