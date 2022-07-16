import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function LoginLayout() {
    return (
        <Container fluid>
            <main className="mb-3" >
                <Outlet />
            </main>
        </Container>

    )
}