
import './App.css';
import NavBar from './Compnents/NavBar/NavBar';
function App() {
const styleApp = { padding: '10px 25px', marginTop :10}
  return (
    //jsx
    <div className="container" style={styleApp}>
      <NavBar />
      <h1>hola</h1>
    </div>
  );
}

export default App;