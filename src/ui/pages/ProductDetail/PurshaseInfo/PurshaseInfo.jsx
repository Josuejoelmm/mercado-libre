import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./styles.scss";

export default function PurshaseInfo({ title, condition, sold_quantity, free_shipping, price}) {
    
    return (
        <Row>
            {
                price !== null ?
                <>
                <Col xs={12}>
                    <p className="condition_info text-muted">
                        {condition === "new" ? "Nuevo" : "Usado"} | {sold_quantity} vendidos
                    </p>
                </Col>
                <Col xs={12}>
                    <h2 className="title">{title}</h2>
                </Col>
                <Col className="d-flex mt-2" xs={12}>
                    <h2 className="price m-0">
                        {price.currency === "ARS" ? "$" : null} {Math.floor(price.amount).toLocaleString('de-DE')}
                    </h2>
                    <span className="decimals">{String(price.decimals).split('.')[1]}</span>
                </Col>
                <Col className="mt-4" xs={12}>
                    <Button className="purshase_button w-100" variant="primary">
                        Comprar
                    </Button>
                </Col>
                </> 
                : null
            }
        </Row>
    );
}
