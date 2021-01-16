import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./styles.scss";

export default function PurshaseInfo() {
    return (
        <Row>
            <Col xs={12}>
                <p className="condition_info text-muted">Nuevo | 232 vendidos</p>
            </Col>
            <Col xs={12}>
                <h2 className="title">Deco Reverse Sombrero Oxford</h2>
            </Col>
            <Col className="d-flex mt-2" xs={12}>
                <h2 className="price m-0">$ 1.980</h2>
                <span className="decimals">00</span>
            </Col>
            <Col className="mt-4" xs={12}>
                <Button className="w-100" variant="primary">
                    Comprar
                </Button>
            </Col>
        </Row>
    );
}
