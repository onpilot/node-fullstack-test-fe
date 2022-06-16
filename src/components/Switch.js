import { FormControlLabel, Switch } from '@mui/material';

export const SwitchBtn = (props) => {
  return (
    <FormControlLabel
      control={<Switch size='small' defaultChecked onClick={props.onClick} />}
      label={props.label}
    />
  );
};
