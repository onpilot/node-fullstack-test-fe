import './App.css';
import { useEffect, useState } from 'react';
import { SwitchBtn } from './components/Switch';
import { SearchField } from './components/SearchField';
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';

function App() {
  const [items, setItems] = useState(null);
  const [safeSearch, setSafeSearch] = useState(true);

  useEffect(() => {
    const path = '/api';
    const json = 'format=json';

    let safe_search;
    safeSearch ? (safe_search = 1) : (safe_search = 0);

    fetch(`${path}?${json}&safe_search=${safe_search}`)
      .then((res) => res.json())
      .then((data) => setItems(data.data.items))
      .catch((err) => console.error(err));
  }, [safeSearch]);

  const handleClick = (e) => {
    setSafeSearch(e.target.checked);
  };

  return (
    <div className='App'>
      <header className='header'>
        <div className='header__appname'>Flickr Public Feed</div>
        <div className='header__menu'>
          <SwitchBtn label='Safe Search' onClick={(e) => handleClick(e)} />
        </div>
      </header>

      <section className='hero center'>
        <Container maxWidth='md'>
          <Typography variant='h1' color={'white'}>
            Search Image
          </Typography>
          <SearchField />
        </Container>
      </section>

      <section className='imagelist'>
        <Container maxWidth='lg'>
          {items && (
            <ImageList cols={4} rowHeight={164} gap={16}>
              {items.map((item) => (
                <ImageListItem key={item.media.m}>
                  <img
                    style={{ width: '100%', height: 164 }}
                    src={item.media.m}
                    alt={item.title}
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={<span>by: {item.author}</span>}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Container>
      </section>
    </div>
  );
}

export default App;
