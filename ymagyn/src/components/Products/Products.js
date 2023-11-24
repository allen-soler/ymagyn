import ProductItem from "./ProductItem"

//need to change to an api

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'mac cheese',
        description: 'double beef, with cheese',
    },
    {
        id: 'p2',
        price: 5,
        title: 'big mac',
        description: 'double bread, with beef',
    },
    {
        id: 'p3',
        price: 5,
        title: 'big mac',
        description: 'double bread, with beef',
    },
    {
        id: 'p4',
        price: 5,
        title: 'big mac',
        description: 'double bread, with beef',
    },
];

const Products = (props) => {
    return (
        <div
            className="grid"
            style={{ '--bs-columns': 3, '--bs-gap': '5rem'}} 
        >            <h2>Choose your favorite meal</h2>
            {DUMMY_PRODUCTS.map((product) =>
                <ProductItem
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                />
            )}
        </div>
    )
}

export default Products