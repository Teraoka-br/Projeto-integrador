import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MenuCentralItem({ icone, titulo, to }) {

    return (
        <>
            {to ?
                (
                    <Button variant="primary" size="lg" as={Link} to={to} >
                        <img src={icone} alt="" className="img-fluid" /> <br />
                        {titulo}
                    </Button>
                )
                :
                (
                    <Button variant="primary" size="lg">
                        <img src={icone} alt="" className="img-fluid" /> <br />
                        {titulo}
                    </Button>
                )
            }
        </>

    )

}