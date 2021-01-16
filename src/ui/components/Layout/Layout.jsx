import React from "react";
import Navbar from "../Navbar";
import Container from "react-bootstrap/Container";
import "./styles.scss";

export default function Layout({ children }) {
    return (
        <main>
            <Navbar />
            <Container fluid className="gray-bg">
                <Container>{children}</Container>
            </Container>
        </main>
    );
}
