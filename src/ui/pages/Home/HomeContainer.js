import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from '../../components/BreadCrumb';
import ProductsList from './ProductsList'

export default function HomeContainer() {
    return (
        <Container fluid>
            <Row as="section">
                <Col>
                    <Breadcrumb />
                </Col>
            </Row>
            <Row as="section">
                <Col>
                    <ProductsList />
                </Col>
            </Row>
        </Container>
    );
}
