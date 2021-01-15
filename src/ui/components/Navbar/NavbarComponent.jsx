import { useState } from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import { GrSearch } from "react-icons/gr";
import logo from "../../assets/images/logo.png";
import './styles.scss';
import { searchProducts } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

export default function NavbarComponent() {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    
    const onChangeSearch = (e) => {
        setQuery(e.target.value);
    }
   
    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(query))
        console.log('SENDED FORM');
    }

    return (
        <Container fluid className="bg-warning">
            <Navbar className="justify-content-between" expand="sm">
                <Link to="/">
                    <Navbar.Brand>
                        <Image src={logo} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    className="justify-content-end"
                    id="basic-navbar-nav"
                >
                    <Form onSubmit={onSearchSubmit} className="w-100">
                        <InputGroup className="mt-2">
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
    );
}
