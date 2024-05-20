import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props : {label: string, type: string, name: string}) {
  const {label, type, name} = props
  return (
    <div className=' flex flex-col my-3'>
      <label htmlFor="fullWidth">{label}</label>
      <TextField inputProps={{  autoComplete: 'off' }} name={name} type={type} fullWidth  id="fullWidth" />
    </div>
  );
}
