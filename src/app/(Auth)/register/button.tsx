import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicButtons() {
  const [ isLoading ] = useState(false)
  return (
    <Stack spacing={2} direction="row" className=' py-5'>
      <Button variant="contained" disabled={isLoading} fullWidth type="submit">{isLoading ? "Loading..." : "Register"}</Button>
    </Stack>
  );
}
