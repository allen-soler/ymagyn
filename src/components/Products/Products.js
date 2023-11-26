import ProductItem from "./ProductItem"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Products = (props) => {
    const products = props.products
    
    return (
        <Container fluid > 
            <h2 style={{ marginBottom: '5rem' }}>Choose your favorite meal</h2>
            <Row className="g-4">
                {products.map((product) =>
                    <Col xs={12} sm={6} md={4} lg={3} key={product.id} >
                    <ProductItem
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            rating={product.rating}
                            toppings={product.toppings}
                            img={product.img}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default Products;