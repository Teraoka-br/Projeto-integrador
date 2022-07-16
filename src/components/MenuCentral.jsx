import MenuCentralItem from "./MenuCentralItem";
import cliente from "../assets/icones/cliente.png";
export default function MenuCentral() {
  return (
    <div class="grid">
      <div class="g-col-6"><MenuCentralItem icone={cliente} titulo="Cliente" to="/clientes/cadastrar" /></div>
      <div class="g-col-6"><MenuCentralItem icone={cliente} titulo="Cliente"/></div>

      <div class="g-col-6"><MenuCentralItem icone={cliente} titulo="Cliente"/></div>
      <div class="g-col-6"><MenuCentralItem icone={cliente} titulo="Cliente"/></div>
    </div>

  );
}


