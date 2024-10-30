import {Col, Container, Row} from "react-bootstrap";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import SingleResponsibilityPage from "./pages/SingleResponsibility.page.tsx";
import NavMenu from "./components/NavMenu.tsx";
import {MenuItem} from "../../common/models/menu-item.model.ts";
import {useState} from "react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "single-responsibility",
        element: <SingleResponsibilityPage />
    }

]);

export default function RootLayout() {
    const [generalMenuItems] = useState<MenuItem[]>([
        {
            id: 1,
            title: 'Inicio',
            link: '/',
        },
    ]);
    const [solidMenuItems] = useState<MenuItem[]>([
        {
            id: 2,
            title: 'Single Responsibility',
            link: '/single-responsibility',
            description: 'Single Responsibility Principle'
        }
    ]);

    return (
        <Container className="py-4">
            <Row>
                <Col md={4}>
                    <NavMenu title="Inicio" items={generalMenuItems} />
                    <NavMenu title="SOLID Principles" items={solidMenuItems} />
                </Col>
                <Col md={8}>
                    <RouterProvider router={router} />
                </Col>
            </Row>
        </Container>
    );
}