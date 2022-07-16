import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <Container fluid>
            <Header />
            <main className="py-3" >
                <Outlet />
            </main>
        </Container>

    )
}