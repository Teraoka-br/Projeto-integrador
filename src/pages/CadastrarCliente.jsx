import { useContext, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Context } from "../context/ClienteContext";


export default function CadastrarCliente() {

  const { create } = useContext(Context);

  const [nome, setNome] = useState();
  const [CPF, setCpf] = useState();
  const [RG, setRg] = useState();
  const [pasta, setPasta] = useState();
  const [profissao, setProfissao] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [rua, setRua] = useState();
  const [cidade, setCidade] = useState();
  const [cep, setCep] = useState();
  const [numero, setNumero] = useState();

  const submit = (event) => {
    event.preventDefault();
    create({
      nome,
      CPF,
      RG,
      pasta,
      profissao,
      email,
      telefone,
      rua,
      cidade,
      cep,
      numero,
    });
  }
  

  return (
    <div className="ClienteForm">
      
      <Form onSubmit={submit}>
        <h4>Dados Pessoais</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control  placeholder="000.000.000-00" value={CPF} onChange={(event) => setCpf(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>RG</Form.Label>
            <Form.Control placeholder="00.000.000-0" value={RG} onChange={(event) => setRg(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Pasta</Form.Label>
            <Form.Control  value={pasta} onChange={(event) => setPasta(event.target.value)} />
          </Form.Group>
          
        </Row>
        
        <Row>
        <Form.Group as={Col} className="mb-3">
            <Form.Label>Profissão</Form.Label>
            <Form.Control value={profissao} onChange={(event) => setProfissao(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control placeholder="(000)00000-0000" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>
        </Row>

        <h4>Endereço</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Rua</Form.Label>
            <Form.Control  value={rua} onChange={(event) => setRua(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} md={3} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control  value={numero} onChange={(event) => setNumero(event.target.value)}/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md={7} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Cidade" value={cidade} onChange={(event) => setCidade(event.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} md={5} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="00.000-000" value={cep} onChange={(event) => setCep(event.target.value)}/>
          </Form.Group>
          
        </Row>
        <Button variant="primary" type="submit" onClick={submit}>
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}