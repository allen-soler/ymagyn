import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import classes from "./ProductItem.module.css"


const ProductItem = (props) => {
    const { title, price, description, id, img } = props;

    return (
        <Card className="card" key={id}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body className={`card-body ${classes['card-body']}`}>
                <Card.Title className="card-title">{title.toUpperCase()}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className={`card-text ${classes['card-text']}`}>
                    {description}
                </ListGroup.Item>
                <ListGroup.Item>
                    <span className="fw-bold">Price :</span> CHF {price}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {/* <Card.Link className="btn btn-outline-primary" as={NavLink} onClick={addToCart}>Add to Cart</Card.Link> */}
                <Card.Link className="btn btn-outline-primary" as={NavLink}  to={`/item/${id}`}>See Burger</Card.Link>

            </Card.Body>
        </Card>
    );
};

export default ProductItem;
