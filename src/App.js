import './App.css';
import Card from './components/card';
import InputComponent from './Input';


function App() {
  return (
    <div className="App">
      <Card>
          <h2>Card Title</h2>
          <p>Card Description</p>
      </Card>
      <InputComponent />
    </div>
  );
}

export default App;
