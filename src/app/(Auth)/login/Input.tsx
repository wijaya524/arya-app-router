import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField(props : {label: string, type: string}) {
    const {label, type} = props
  return (
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  </Box>
  );
}
