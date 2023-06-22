import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [minifigures, setMinifigures] = useState([])
  const aNovaMinifiguraAdicionada = (minifigure)=>{
    console.log(minifigure)
    setMinifigures([...minifigures, minifigure])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aMinifiguraAdicionada={aNovaMinifiguraAdicionada}/>
    </div>
  );
}

export default App;
