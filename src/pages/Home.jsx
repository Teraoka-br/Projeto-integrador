import { Col, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import MenuCentral from "../components/MenuCentral";



export default function Home() {
    return (
        <Row>
            <Col><MenuCentral /></Col>
            <Col></Col>
            <Col><Calendar /></Col>
        </Row>
    );
}