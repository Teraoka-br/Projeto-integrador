import { Col, Row, } from "react-bootstrap";
import Calendar from "react-calendar";

import Header from "../components/Header";
import MenuCentral from "../components/MenuCentral";



export default function Home() {
    return (
        <div>
            <Header />
            <Calendar />
            <MenuCentral />
        </div>
    );
}