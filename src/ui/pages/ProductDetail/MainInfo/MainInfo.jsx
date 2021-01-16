import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import './styles.scss';

export default function MainInfo() {
    return (
        <>
        <Row className="p-0">
            <Col>
                <Image
                    fluid
                    className="w-100"
                    src="https://via.placeholder.com/600x400"
                />
            </Col>
        </Row>
        <Row className="mt-4">
            <Col xs={12}><h3>Descripción del producto</h3></Col>
            <Col xs={12}><p className="description_text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium sint accusamus maxime aut. Unde corrupti vero libero aspernatur nisi delectus aperiam iste pariatur perspiciatis, ducimus autem! Numquam, in neque.</p></Col>
        </Row>
        </>
    )
}
