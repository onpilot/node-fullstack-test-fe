import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const path = '/api';
    const json = 'format=json';

    fetch(`${path}?${json}`)
      .then((res) => res.json())
      .then((data) => setData(data.data.items))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='App'>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
