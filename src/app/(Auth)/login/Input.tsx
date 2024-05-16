import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props : {label: string, type: string}) {
  const {label, type} = props
  return (
    <div className=' flex flex-col my-3'>
      <label htmlFor="fullWidth">{label}</label>
      <TextField inputProps={{  autoComplete: 'off' }} name='email' type='email'  fullWidth  id="fullWidth" />
    </div>
  );
}