import CartBtn from "../Cart/CartBtn";

const Header = (props) => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <h2 className="navbar-brand">Redux Restaurant</h2>
                    <div className="d-flex">
                      <CartBtn />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;