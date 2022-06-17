import { FormControlLabel, Switch } from '@mui/material';

export const SwitchBtn = ({ setSafeSearch }) => {
  const handleClick = () => {
    setSafeSearch((prev) => !prev);
  };

  return (
    <FormControlLabel
      control={
        <Switch size='small' defaultChecked onClick={() => handleClick()} />
      }
      label='Safe Search'
    />
  );
};
