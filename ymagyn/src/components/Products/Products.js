import ProductItem from "./ProductItem"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Products.module.css"

//need to change to an api

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6.00,
        title: 'mac cheese',
        description: 'double beef, with cheese',
    },
    {
        id: 'p2',
        price: 5.00,
        title: 'big mac',
        description: 'double bread, with beef',
    },
    {
        id: 'p3',
        price: 5.00,
        title: 'big mac',
        description: 'double bread, with beef',
    },
    {
        id: 'p4',
        price: 5.00,
        title: 'big mac',
        description: 'double bread, with beef',
    },
];

const Products = () => {
    return (
        <Container fluid style={{ paddingTop: '5rem' }}> 
            <h2>Choose your favorite meal</h2>
            <Row className="g-2">
                {DUMMY_PRODUCTS.map((product) =>
                    <Col xs={12} sm={6} md={4} lg={3} key={product.id} >
                    <ProductItem
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Products;