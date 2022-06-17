import { FormControlLabel, Switch } from '@mui/material';

export const SwitchBtn = ({ setSafeSearch }) => {
  const handleClick = () => {
    setSafeSearch((prev) => !prev);
  };

  return (
    <FormControlLabel
      data-testid='safe-search'
      control={
        <Switch size='small' defaultChecked onClick={() => handleClick()} />
      }
      label='Safe Search'
    />
  );
};
