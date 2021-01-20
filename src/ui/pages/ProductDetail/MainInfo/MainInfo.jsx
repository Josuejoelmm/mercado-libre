import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import './styles.scss';

export default function MainInfo({ picture, description }) {
    return (
        <>
        <Row className="p-0">
            <Col>
                <Image
                    fluid
                    className="w-100"
                    src={picture}
                />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col xs={12}><h3>Descripción del producto</h3></Col>
            <Col xs={12}><p className="description_text">{description}</p></Col>
        </Row>
        </>
    )
}
