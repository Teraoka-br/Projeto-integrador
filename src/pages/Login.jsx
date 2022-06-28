import { Container , Row, Col } from "react-bootstrap";

export default function Login () {
    return (
        <Container>
            <Row>
                <Col class="p-5 mb-5"></Col>
                <Col class="p-5 mb-5"></Col>
                <div class="p-3 mb-5 bg-dark bg-gradient text-white">
                
                <form>
                    <div class=" mb-3">
                        <label for="exampleInputEmail1" class="form-label">Usuário</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
            
            
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
            
                  
                
                    <button type="submit" class="btn btn-primary">Entrar</button>   
                
                </form>
               
                </div>
                <Col class="mb-3"></Col>
            </Row>
        </Container>
    );
}