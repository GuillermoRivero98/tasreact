import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardTA1 from './components/cardTA1';
import Card from './components/Card';
import Contador from './components/Contador';
import ContadorTa9 from './components/ContadorTa9';
import InputComponent from './components/Input';
import ListaTareas from './components/ListaTareas';
import MostrarTexto from './components/MostrarTexto';
import Temporizador from './components/Temporizador';
import Usuarios from './components/Usuarios';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './context/UserContext';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import ThemeToggle from './components/ThemeSwitcher';
import LanguageToggle from './components/LanguageSwitcher';
import UpdateUser from './components/UpdateUser';

export default function App() {
  const { isAuthenticated } = useAuth();
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <Router>
      <div className={`App ${theme}`}>
        <h1>TA 1</h1>
        <CardTA1 
          title="Card Title 1" 
          description="Card Description 1" 
          assignedTo="Juan" 
          startDate="12/12/2021" 
          endDate="12/12/2021"
        />
        <CardTA1 
          title="Card Title 2" 
          description="Card Description 2" 
          assignedTo="Pedro" 
          startDate="13/12/2021" 
          endDate="14/12/2021"
        />
        <CardTA1 
          title="Card Title 3" 
          description="Card Description 3" 
          assignedTo="Maria" 
          startDate="15/12/2021" 
          endDate="16/12/2021"
        />
        
        <h1>TA 2</h1>
        <Card>
          <h2>Card Title</h2>
          <p>Card Description</p>
          <p><strong>Asignado a:</strong> Juan</p>
          <p><strong>Fecha de Inicio:</strong> 12/12/2021</p>
          <p><strong>Fecha de Fin:</strong> 12/12/2021</p>
        </Card>
        <Card>
          <h2>Card Title 2</h2>
          <p>Card Description 2</p>
          <p><strong>Asignado a:</strong> Pedro</p>
          <p><strong>Fecha de Inicio:</strong> 13/12/2021</p>
          <p><strong>Fecha de Fin:</strong> 14/12/2021</p>
        </Card>
        <Card>
          <h2>Card Title 3</h2>
          <p>Card Description 3</p>
          <p><strong>Asignado a:</strong> Maria</p>
          <p><strong>Fecha de Inicio:</strong> 15/12/2021</p>
          <p><strong>Fecha de Fin:</strong> 16/12/2021</p>
        </Card>

        <h1>TA 3 - Input Component</h1>
        <InputComponent />

        <h1>TA 4 - Contador</h1>
        <Contador />

        <h1>TA 5 - MostrarTexto</h1>
        <MostrarTexto />

        <h1>TA 6, 7, 8 - ListaTareas</h1>
        <ListaTareas />

        <h1>TA 9 - ContadorTa9</h1>
        <ContadorTa9 />

        <h1>TA 10 - Usuarios</h1>
        <Usuarios />

        <h1>TA 11 - Temporizador</h1>
        <Temporizador />

        <h1>TA 12, 13 - User Context and Update</h1>
        <UpdateUser />

        <h1>TA 14 y TA 15 - Tema e Idioma</h1>
        <ThemeToggle />
        <LanguageToggle />
        <p>Tema actual: {theme}</p>
        <p>Idioma actual: {language}</p>

        <h1>TA 16 - Navegación</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <h1>TA 17 - Contenido dinámico</h1>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>

        <h1>TA 18 - Rutas protegidas</h1>
        <Routes>
          <Route 
            path="/private" 
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <div>This is a protected route</div>
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}