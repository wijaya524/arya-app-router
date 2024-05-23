import * as React from 'react';
import Stack from '@mui/material/Stack';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';


function GitHubIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
       <svg data-testid="GitHubIcon"></svg>
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  return (
    <Stack direction="row" spacing={3} alignItems="flex-end">
     <GitHubIcon fontSize="large" />
    </Stack>
  );
}
