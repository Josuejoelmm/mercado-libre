import React from "react";
import Navbar from "../Navbar";
import Container from "react-bootstrap/Container";
import "./styles.scss";
import { Helmet } from "react-helmet-async";


export default function Layout({ children }) {
    return (
        <main>
            <>
                <Helmet>
                    <title>Mercado Libre</title>
                </Helmet>
            </>
            <Navbar />
            <Container fluid className="gray-bg">
                <Container>{children}</Container>
            </Container>
        </main>
    );
}
