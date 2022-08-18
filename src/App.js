import Home from './pages/Home';
import Login from './pages/Login';
import Calendar from 'react-calendar'
import CadastrarCliente from './pages/CadastrarCliente.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import Contexts from './context/Contexts';



function App() {
  return (
    <Contexts>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="clientes/cadastrar" element={<CadastrarCliente />} />
          </Route>

          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Esta página não existe.</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Contexts>
  );



}

export default App;
