import CartBtn from "../Cart/CartBtn";

const Header = (props) => {
    return (
        <header>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <h2 class="navbar-brand">Redux Restaurant</h2>
                    <div class="d-flex">
                      <CartBtn />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;