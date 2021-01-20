import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from '../../components/BreadCrumb';
import ErrorMessageRequest from '../../components/ErrorMessageRequest/ErrorMessageRequest';
import PurshaseInfo from './PurshaseInfo';
import MainInfo from './MainInfo';
import Loader from '../../components/Loader';
import { getProducDetail } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from "react-helmet-async";

export default function ProductContainer() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.singleProduct.details);
    const isLoadingProduct = useSelector(state => state.singleProduct.isLoadingProduct);
    const breadCrumb = useSelector(state => state.singleProduct.breadCrumb);
    const errorRequest = useSelector(state => state.singleProduct.errorRequest);

    useEffect(() => {
        dispatch(getProducDetail(id));
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Helmet>
                <title>{`${singleProduct.title === undefined ? "Producto" : singleProduct.title} | Mercado Libre`}</title>
            </Helmet>
        {
            isLoadingProduct ? 
            <Loader /> :
            errorRequest ?
            <ErrorMessageRequest message={errorRequest} /> :

            <Container fluid className="single_prod_container">
                {
                    singleProduct.description &&
                    <>
                    <Row as="section">
                        <Col>
                            { breadCrumb.length > 0 ? <Breadcrumb breadCrumb={breadCrumb} /> : null }
                        </Col>
                    </Row>
                    <Row className="bg-white" as="section">
                        <Col md={8}>
                                <MainInfo
                                    picture={singleProduct.picture}
                                    description={singleProduct.description}
                                />
                        </Col>
                        <Col className="py-2" md={4}>
                            <PurshaseInfo 
                                title={singleProduct.title}
                                condition={singleProduct.condition}
                                sold_quantity={singleProduct.sold_quantity}
                                price={singleProduct.price}
                                free_shipping={singleProduct.free_shipping}
                                />
                        </Col>
                    </Row>
                    </>
                }
            </Container>
        }
        </>
    );
}
