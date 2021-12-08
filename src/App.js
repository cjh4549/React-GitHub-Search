import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  // Keeping all global states in the app.js
  const [inputValue, setInputValue] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If the input is not there, it will terminate the function
    if (!inputValue) {
      return;
    }

    // UI state to trigger loading event
    setLoading(true);

    // API call - used native fetch method over Axios to keep it simple 
    fetch("https://api.github.com/search/repositories?q=" + inputValue)
      .then( response => {
        return response.json();
      })
      .then( jsonData => {
        setLoading(false);
        setRepos(jsonData.items);
      })
      // Simple error handling for API calls
      .catch( err => {
        setLoading(false);
        setError(true);
        console.error(err);
      })  
  }, [inputValue])

  return (
    <div className="App">
      {/* Broke into header and main components for better semantics and scalability */}
      <Header inputValue={inputValue} setInputValue={setInputValue} loading={loading} />  
      <Main repos={repos} loading={loading} error={error} />
    </div>
  );
}

export default App;
