import './App.css';
import { useEffect, useState } from 'react';
import { SwitchBtn } from './components/Switch';

function App() {
  const [data, setData] = useState(null);
  const [safeSearch, setSafeSearch] = useState(true);

  useEffect(() => {
    const path = '/api';
    const json = 'format=json';

    let safe_search;
    safeSearch ? (safe_search = 1) : (safe_search = 0);

    fetch(`${path}?${json}&safe_search=${safe_search}`)
      .then((res) => res.json())
      .then((data) => setData(data.data.items))
      .catch((err) => console.error(err));
  }, [safeSearch]);

  const handleClick = (e) => {
    setSafeSearch(e.target.checked);
  };

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <SwitchBtn label='Safe Search' onClick={(e) => handleClick(e)} />
    </div>
  );
}

export default App;
