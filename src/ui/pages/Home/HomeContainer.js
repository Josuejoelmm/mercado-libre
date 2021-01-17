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

export default function HomeContainer() {
    const dispatch = useDispatch();
    const query = useQuery();
    const searchParam = query.get('search');
    const requestedProducts = useSelector(state => state.requestedProducts);
    const { isLoading } = requestedProducts;
    const { list, breadCrumb } = requestedProducts;

    useEffect(() => {
        console.log('VOLVI A EJECUTAR DIDMOUNT');
        dispatch(searchProducts(searchParam));
    }, []);
    
    console.log(searchParam, 'QUE QUERY MANDO?');
    return (
        <Container fluid>
            {
                isLoading ? 
                <Loader /> :
                <>
                <Row as="section">
                    <Col>
                        <Breadcrumb breadCrumb={breadCrumb} />
                    </Col>
                </Row>
                <Row as="section">
                    <Col>
                        {
                            list.length > 0 && 
                            <ProductsList list={list} />
                        }
                    </Col>
                </Row>
                </>
            }
        </Container>
    );
}
