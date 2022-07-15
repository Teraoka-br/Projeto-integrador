import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function CadastrarCliente() {
  return (
    <Container>

      <Form>
        <Row className="mb-5">
          <Form.Group as={Col} controlId="Nome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome" />
          </Form.Group>

          <Form.Group as={Col} controlId="CPF">
            <Form.Label>CPF</Form.Label>
            <Form.Control type="text" placeholder="000.000.000-00" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-5" controlId="CEP">
          <Form.Label>CEP</Form.Label>
          <Form.Control placeholder="00.000-000" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="RG">
          <Form.Label>RG</Form.Label>
          <Form.Control placeholder="00.000.000-0" />
        </Form.Group>

        <Row className="mb-5">
          <Form.Group as={Col} controlId="cidade">
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>
          <br></br>
          <Form.Group as={Col} controlId="estado">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>



          <br></br>

          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}