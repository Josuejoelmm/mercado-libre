import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from '../../components/BreadCrumb';

export default function ProductContainer() {
    return (
        <Container fluid>
            <Row as="section">
                <Col>
                    <Breadcrumb />
                </Col>
            </Row>
            <Row as="section">
                <Col className="bg-dark" sm={9}>
                    COL 1
                </Col>
                <Col className="bg-primary" sm={3}>
                    COL 2
                </Col>
            </Row>
        </Container>
    );
}
