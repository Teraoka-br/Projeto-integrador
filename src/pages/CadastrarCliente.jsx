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
      <h3>Novo Cliente</h3>
      <Form onSubmit={submit}>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control placeholder="Nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Sobrenome</Form.Label>
            <Form.Control placeholder="Sobrenome" value={CPF} onChange={(event) => setCpf(event.target.value)} />
          </Form.Group>
        </Row>
        <h4>Dados de contato</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control placeholder="Telefone" value={RG} onChange={(event) => setRg(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" value={pasta} onChange={(event) => setPasta(event.target.value)} />
          </Form.Group>
        </Row>

        <h4>Dados de acesso</h4>
        <Form.Group className="mb-3">
          <Form.Label>Usuário</Form.Label>
          <Form.Control placeholder="Usuário" value={profissao} onChange={(event) => setProfissao(event.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Form.Group>

        <h4>Endereço</h4>
        <Row>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Endereço</Form.Label>
            <Form.Control placeholder="Endereço" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
          </Form.Group>
          <Form.Group as={Col} md={3} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control placeholder="Número" value={rua} onChange={(event) => setRua(event.target.value)}/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md={7} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control placeholder="Cidade" value={cidade} onChange={(event) => setCidade(event.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} md={5} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="CEP" value={cep} onChange={(event) => setCep(event.target.value)}/>
          </Form.Group>
          <Form.Group as={Col} md={5} className="mb-3">
            <Form.Label>CEP</Form.Label>
            <Form.Control placeholder="(014)00000-0000" value={numero} onChange={(event) => setNumero(event.target.value)}/>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </div>
  );
}