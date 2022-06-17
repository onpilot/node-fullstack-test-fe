import { createTheme, TextField, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const SearchField = ({ input, setInput }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label='search by tag'
        variant='filled'
        placeholder='Try to type anything'
        sx={{ margin: '20px 0', width: 800, maxWidth: '90%' }}
      />
    </ThemeProvider>
  );
};
