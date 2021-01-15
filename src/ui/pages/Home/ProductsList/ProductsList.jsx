
import ListGroup from "react-bootstrap/ListGroup";
import Product from '../Product';

export default function ProductsList() {
    return (
        <ListGroup as="ol">
            {
                [1,2,3,4].map(product => (
                    <Product key={product} />
                ))
            }
        </ListGroup>
    );
}
