import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useQuery from '../../hooks/useQuery';
import { searchProducts } from "../../../redux/actions";
import { useSelector } from 'react-redux';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from '../../components/BreadCrumb';
import ProductsList from './ProductsList';
import Loader from '../../components/Loader';
import NotItemsFound from '../../components/NotItemsFound';

export default function HomeContainer() {
    const dispatch = useDispatch();
    const query = useQuery();
    const searchParam = query.get('search');
    const requestedProducts = useSelector(state => state.requestedProducts);
    const { list, breadCrumb, showSearchMsg, isLoading } = requestedProducts;

    useEffect(() => {
        if (searchParam !== null) {
            dispatch(searchProducts(searchParam));
        }
    }, []);
    
    return (
        <Container fluid>
            {
                isLoading ? 
                <Loader /> :
                <>
                <Row as="section">
                    <Col>
                        { breadCrumb.length > 0 ? <Breadcrumb breadCrumb={breadCrumb} /> : null }
                    </Col>
                </Row>
                <Row as="section">
                    <Col>
                        { list.length > 0 && <ProductsList list={list} /> }
                    </Col>
                </Row>
                </>
            }
            {
                showSearchMsg && <NotItemsFound />
            }
        </Container>
    );
}
