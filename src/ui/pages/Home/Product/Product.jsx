import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

export default function Product() {
    return (
        <ListGroup.Item as="li">
            <Row>
                <Col sm="auto">
                    <Link to="/items/:id">
                        <Image
                            fluid
                            className="w-100"
                            src="https://via.placeholder.com/90x90"
                        />
                    </Link>
                </Col>
                <Col>
                    <h4>$ 1.980</h4>
                    <Link
                        to="/items/:id"
                        className="text-dark text-decoration-none"
                    >
                        <p>
                            Macbook Air 13.3 Intel Core I5 512gb Ssd, 8gb (nuevo
                            Modelo)
                        </p>
                    </Link>
                </Col>
                <Col className="d-flex flex-column align-items-end" sm={3}>
                <Button variant="light" size="sx" disabled>
                    Capital Federal
                </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}
