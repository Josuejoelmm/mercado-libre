import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Product({ product }) {
    return (
        <ListGroup.Item as="li">
            <Row>
                <Col as="figure" sm="auto">
                    <Link to={`/items/${product.id}`} >
                        <Image
                            className="product_image"
                            src={product.picture}
                        />
                    </Link>
                </Col>
                <Col>
                    <h4>{product.price.currency === "ARS" ? "$" : null} {Math.round(product.price.amount).toLocaleString('de-DE')}</h4>

                    <Link
                        to="/items/:id"
                        className="text-dark text-decoration-none"
                    >
                        <p>{product.title}</p>
                    </Link>
                    {product.free_shipping && <span className="free_shipping">Envio Gratis</span>}
                </Col>
                <Col className="d-flex flex-column align-items-end" sm={3}>
                <Button variant="light" size="sx" disabled>
                    {product.condition === "new" ? "Nuevo" : "Usado"}
                </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}
