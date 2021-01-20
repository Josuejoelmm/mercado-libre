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
                <Col as="figure" xs="auto" sm="3" md="3" lg="3" xl="3">
                    <Link to={`/items/${product.id}`} >
                        <Image
                            className="product_image"
                            src={product.picture}
                        />
                    </Link>
                </Col>
                <Col xs="auto" sm="6" md="6" lg="6" xl="6">
                    <h4>{product.price.currency === "ARS" ? "$" : null} {Math.round(product.price.amount).toLocaleString('de-DE')}</h4>
                    <Link
                        to={`/items/${product.id}`}
                        className="text-dark text-decoration-none"
                    >
                        <p>{product.title}</p>
                    </Link>
                    {product.free_shipping && <span className="free_shipping">Envio Gratis</span>}
                </Col>
                <Col className="d-flex flex-column align-items-end" xs="auto" sm="3" md="3" lg="3" xl="3">
                <Button variant="light" size="sx" disabled>
                    {product.condition === "new" ? "Nuevo" : "Usado"}
                </Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
}
