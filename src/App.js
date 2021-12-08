import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json)
      })  
  }, [inputValue])

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Main />
    </div>
  );
}

export default App;
