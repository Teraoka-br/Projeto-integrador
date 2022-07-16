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
            <Form.Select defaultValue="Estado">
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
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