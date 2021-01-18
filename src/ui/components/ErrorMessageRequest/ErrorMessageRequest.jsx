import React from "react";
import Alert from "react-bootstrap/Alert";

export default function ErrorMessageRequest({ message }) {
    return (
        <div className="pt-4 d-flex justify-content-center">
            <Alert  variant="danger">
                {message}
            </Alert>
        </div>
    );
}
