import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder='Digite o seu nome'/>
      <CampoTexto label='Cargo' placeholder='Digite o seu cargo'/>
      <CampoTexto label='Imagem' placeholder='URL da sua imagem'/>
    </div>
  );
}

export default App;
