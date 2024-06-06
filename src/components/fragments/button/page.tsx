import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonContrast(props : {text: string}) {
    const {text} = props
  return (
    <Stack spacing={2} direction="row" className=' py-1'>
      <Button variant="contained" color='warning' fullWidth type="submit">{text}</Button>
    </Stack>
  );
}