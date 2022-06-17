import { createTheme, TextField, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const SearchField = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <TextField
        label='search by tag'
        variant='filled'
        placeholder='type some tags and press enter'
        sx={{ margin: '20px 0', width: 800, maxWidth: '90%' }}
      />
    </ThemeProvider>
  );
};
