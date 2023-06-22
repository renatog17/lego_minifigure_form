import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Serie from './componentes/Serie'

function App() {

  const series =[
    {
      nome:'Série 23',
      corPrimaria:'#8B572A',
      corSecundaria:'#F6C19C'
    },
    {
      nome:'Série 24',
      corPrimaria:'#FF00FF',
      corSecundaria:'#FF6EC7'
    },
    {
      nome:'Lego City',
      corPrimaria:'#000080',
      corSecundaria:'#456789'
    },
    {
      nome:'Lego City Motos',
      corPrimaria:'#00008B',
      corSecundaria:'#4169E1'
    }
  ]

  const [minifigures, setMinifigures] = useState([])
  const aNovaMinifiguraAdicionada = (minifigure)=>{
    console.log(minifigure)
    setMinifigures([...minifigures, minifigure])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario series={series.map(serie => serie.nome)} aMinifiguraAdicionada={aNovaMinifiguraAdicionada}/>
      {series.map(serie=> <Serie key={serie.nome} nome={serie.nome} corPrimaria={serie.corPrimaria} corSecundaria={serie.corSecundaria}/>)}

    </div>
  );
}

export default App;
