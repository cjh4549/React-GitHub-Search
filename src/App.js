import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setRepos(jsonData.items);
      })  
  }, [inputValue])

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Main repos={repos} />
    </div>
  );
}

export default App;
