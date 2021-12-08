import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    setLoading(true);

    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        setLoading(false);
        setRepos(jsonData.items);
      })  
  }, [inputValue])

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} loading={loading} />
      <Main repos={repos} loading={loading} />
    </div>
  );
}

export default App;
