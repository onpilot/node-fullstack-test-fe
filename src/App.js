import './App.css';
import { useEffect, useState } from 'react';
import { SwitchBtn } from './components/SwitchBtn';
import { SearchField } from './components/SearchField';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Button,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';

function App() {
  const [items, setItems] = useState([]);
  const [safeSearch, setSafeSearch] = useState(true);
  const [input, setInput] = useState('');

  // TODO: Fix `SearchField` component unable to function after re-fetching feeds
  const fetchData = () => {
    const path = '/api';
    const json = 'format=json';

    let safe_search;
    safeSearch ? (safe_search = 1) : (safe_search = 0);

    // TODO: Handle duplicate feed data items, then it'll be safe if we want to implement pagination
    fetch(`${path}?${json}&safe_search=${safe_search}`)
      .then((res) => res.json())
      .then((data) => setItems((prev) => [...prev, ...data.data.items]))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className='App'>
      <header className='header'>
        <div className='header__appname'>Flickr Public Feed</div>
        <div className='header__menu'>
          <SwitchBtn setSafeSearch={setSafeSearch} />
        </div>
      </header>

      <section className='hero center'>
        <Container maxWidth='md'>
          <Typography variant='h1' color={'white'}>
            Search Image
          </Typography>
          <SearchField input={input} setInput={setInput} />
        </Container>
      </section>

      <section className='imagelist'>
        <Container maxWidth='lg'>
          {items && (
            <ImageList cols={4} rowHeight={164} gap={16}>
              {items.map(
                (item) =>
                  item.tags.includes(input) && (
                    <ImageListItem key={item.media.m}>
                      <LazyLoadImage
                        src={item.media.m}
                        alt={item.title}
                        height={164}
                        width={'100%'}
                        effect='blur'
                      />
                      <ImageListItemBar
                        title={item.title !== ' ' ? item.title : 'No Title'}
                        subtitle={
                          <span>
                            <p>by: {item.author}</p>
                            <small>tags: {item.tags || '-'}</small>
                          </span>
                        }
                      />
                    </ImageListItem>
                  )
              )}
            </ImageList>
          )}
        </Container>
      </section>

      <div className='loadmore center'>
        <Button variant='outlined' onClick={() => handleClick()}>
          Load More
        </Button>
      </div>
    </div>
  );
}

export default App;
