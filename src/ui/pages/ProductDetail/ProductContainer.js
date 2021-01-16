import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "../../components/BreadCrumb";
import PurshaseInfo from './PurshaseInfo';
import MainInfo from './MainInfo';

export default function ProductContainer() {
    return (
        <Container fluid className="single_prod_container">
            <Row as="section">
                <Col>
                    <Breadcrumb />
                </Col>
            </Row>
            <Row className="bg-white" as="section">
                <Col md={9}>
                    <MainInfo />
                </Col>
                <Col className="py-2" md={3}>
                    <PurshaseInfo />
                </Col>
            </Row>
        </Container>
    );
}
