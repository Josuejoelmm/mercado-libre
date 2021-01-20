import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./styles.scss";

export default function BreadcrumbComp({ breadCrumb }) {
    return (
        <Breadcrumb>
            {breadCrumb.map(value => (
                <Breadcrumb.Item key={value}>
                    <span className="text-dark text-muted">{value}</span>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}
