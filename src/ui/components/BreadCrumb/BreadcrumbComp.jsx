import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./styles.scss";

export default function BreadcrumbComp() {
    return (
        <Breadcrumb>
            <Breadcrumb.Item className="text-decoration-none">
                <span className="text-dark text-muted">
                    Electrónica, Audio y Video
                </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span className="text-dark text-muted">Audio</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span className="text-dark text-muted">
                    Reproductores Portátiles
                </span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <span className="text-dark text-muted">iPod</span>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}
