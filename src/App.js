import './App.css';
import Card from './components/card';


function App() {
  return (
    <div className="App">
      <Card
        titulo="Tarea 1"
        descrpcion="Descripción de la tarea 1"
        pesonaAsignada="Juan Perez"
        fechaInicio="2021-01-01"
        fechaFin="2021-01-15"
      />
    </div>
  );
}

export default App;
