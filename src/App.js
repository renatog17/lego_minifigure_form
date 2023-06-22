import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Serie from './componentes/Serie'

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
      <Serie nome='Serie 23'/>
      <Serie nome='Serie 24'/>
      <Serie nome='Lego city'/>

    </div>
  );
}

export default App;
