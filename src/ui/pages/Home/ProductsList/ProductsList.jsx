
import ListGroup from "react-bootstrap/ListGroup";
import Product from '../Product';

export default function ProductsList({ list }) {
    return (
        <ListGroup as="ol">
            {
                list.map((product, index) => {
                    if (index < 4) {
                        return <Product key={product.id} product={product} />
                    }
                    return null;
                })
            }
        </ListGroup>
    );
}
