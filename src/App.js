import './App.css';
import Card from './components/card';
import Contador from './Contador';
import InputComponent from './Input';
import ListaTareas from './ListaTareas';
import MostrarTexto from './MostrarTexto';


function App() {
  return (
    <div className="App">
      <Card>
        <h2>Card Title</h2>
        <p>Card Description</p>
        <p><strong>Asignado a:</strong>Juan</p>
        <p><strong>Fecha de Inicio:</strong> 12/12/2021</p>
        <p><strong>Fecha de Fin:</strong> 12/12/2021</p>
      </Card>

      <Card>
        <h2>Card Title</h2>
        <p>Card Description</p>
        <p><strong>Asignado a:</strong>Juan</p>
        <p><strong>Fecha de Inicio:</strong> 12/12/2021</p>
        <p><strong>Fecha de Fin:</strong> 12/12/2021</p>
      </Card>

      <Card>
        <h2>Card Title</h2>
        <p>Card Description</p>
        <p><strong>Asignado a:</strong>Juan</p>
        <p><strong>Fecha de Inicio:</strong> 12/12/2021</p>
        <p><strong>Fecha de Fin:</strong> 12/12/2021</p>
      </Card>
      
      <InputComponent />

      <Contador/>

      <MostrarTexto/>

      <ListaTareas/>

    </div>
  );
}

export default App;
