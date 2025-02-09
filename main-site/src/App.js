import logo from './images/mah_logo_no_bg_black_border.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="MAH-logo" alt="logo"></img>     
        <a href="/palavra"> Go to Palavra </a>
      </header>
    </div>
  );
}

export default App;


//<a href="/palavra"> Go to Palavra </a>
//<img src={logo} className="App-logo" alt="logo" />