import './App.css';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Main />
    </div>
  );
}

export default App;
