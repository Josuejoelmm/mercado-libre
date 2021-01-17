import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../components/BreadCrumb';
import PurshaseInfo from './PurshaseInfo';
import MainInfo from './MainInfo';
import Loader from '../../components/Loader';
import { getProducDetail } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductContainer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.singleProduct.details);
    const isLoadingProduct = useSelector(state => state.singleProduct.isLoadingProduct);

    useEffect(() => {
        dispatch(getProducDetail(id));
    }, []);

    return (
        <Container fluid className="single_prod_container">
            {
                isLoadingProduct ? 
                <Loader /> :
                <>
                <Row as="section">
                    <Col>
                        <Breadcrumb />
                    </Col>
                </Row>
                <Row className="bg-white" as="section">
                    <Col md={8}>
                        <MainInfo
                            picture={singleProduct.picture && singleProduct.picture}
                            description={singleProduct.description && singleProduct.description}
                        />
                    </Col>
                    <Col className="py-2" md={4}>
                        <PurshaseInfo 
                            title={singleProduct.title && singleProduct.title}
                            condition={singleProduct.condition && singleProduct.condition}
                            sold_quantity={singleProduct.sold_quantity && singleProduct.sold_quantity}
                            price={ singleProduct.price !== undefined ? singleProduct.price : null}
                            free_shipping={singleProduct.free_shipping && singleProduct.free_shipping}
                        />
                    </Col>
                </Row>
                </>
            }
        </Container>
    );
}
