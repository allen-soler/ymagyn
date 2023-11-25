import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { title, price, description, id } = props;

    const addToCart = () => {
        dispatch(
            cartActions.addItems({
                id,
                title,
                price,
                description
            })
        )
    }
    // Placeholder image URL
    const placeholderImage = 'https://via.placeholder.com/150';

    return (
        <div className="g-col-6">
            <div className=" card" style={{ width: '18rem' }}>
                <img src={placeholderImage} className="card-img-top" alt={'Product preview'} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Price: {price}</p>
                </div>
                <div className="card-body">
                    <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
