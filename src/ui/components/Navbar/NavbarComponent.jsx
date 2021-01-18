import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import { GrSearch } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import "./styles.scss";
import { searchProducts } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function NavbarComponent(props) {
    const [query, setQuery] = useState('');
    const details = useSelector(state => state.singleProduct.details);
    const dispatch = useDispatch();
    const history = useHistory();

    const onChangeSearch = e => {
        setQuery(e.target.value);
    };

    const onSearchSubmit = e => {
        e.preventDefault();
        if (query) {
            history.push(`/items?search=${query}`)
            dispatch(searchProducts(query));
        }
    };

    useEffect(() => {
        console.log('VOLVI A HACER DIDMOUNT');
    }, [details])
   
    // console.log(history);
    return (
        <Container fluid className="bg-warning">
            <Container>
                <Navbar className="justify-content-between" expand="sm">
                    <Link to="/">
                        <Navbar.Brand>
                            <Image src={logo} />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="button_collapse basic-navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-end"
                        id="basic-navbar-nav"
                    >
                        <Form onSubmit={onSearchSubmit} className="w-100">
                            <InputGroup className="search_input">
                                <FormControl
                                    value={query}
                                    onChange={onChangeSearch}
                                    placeholder="Nunca dejes de buscar"
                                />
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <GrSearch />
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Container>
    );
}
