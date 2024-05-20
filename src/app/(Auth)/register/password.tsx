'use client'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <div className='flex flex-col'>
    <label htmlFor="Password">Password</label>
    <OutlinedInput fullWidth
     name='password'
     id='Password'
      sx={{ outline: 'none', borderColor: 'green'}}
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end"  >
          <IconButton
            sx={{ color: '#fff'}}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
      </div>
  )
}
