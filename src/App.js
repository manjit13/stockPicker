import './App.css';
import './StockPicker'
import StockPicker from './StockPicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Stock Picker Widget
      </header>
      <StockPicker refreshInterval={3000}/>
    </div>
  );
}

export default App;
