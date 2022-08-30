import MenuCentralItem from "./MenuCentralItem";
import cliente from "../assets/icones/cliente.png";
import engrenagem from "../assets/icones/engrenagem.png"
import processos from "../assets/icones/processos.png"
import tarefas from "../assets/icones/tarefas.png"


export default function MenuCentral() {
  return (
    <div class="grid" >

      
      <div class="g-col-6,5"><MenuCentralItem icone={cliente} titulo="Clientes" to="/clientes/cadastrar" /></div>
      <div class="g-col-6,5" ><MenuCentralItem icone={processos} titulo="Processos"/></div>
      <div class="g-col-6,5"><MenuCentralItem icone={tarefas} titulo="Tarefas"/></div>
      <div class="g-col-6,5"><MenuCentralItem icone={engrenagem} titulo="Opçoes"/></div>
      
      

    </div>
    
  );
  
}


