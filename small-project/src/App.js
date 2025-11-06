import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Random Color */}
      <RandomColor />
      {/* Accordion Component */}
      <Accordion />
    </div>
  );
}

export default App;
