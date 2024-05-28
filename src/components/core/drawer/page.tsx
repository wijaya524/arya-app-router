import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle, Home, Info } from '@mui/icons-material';
import Link from 'next/link'; 
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className='' >
      <Button onClick={toggleDrawer(true)} className='fixed left-0'><MenuIcon color='primary' sx={{ fontSize: 30 }}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ul className='flex py-10 flex-col w-52 font-bold '>
          <li className=' flex mb-1 px-14 py-1 hover:bg-slate-400 justify-start'><Home /><Link href={"/"} >Home</Link></li>
          <li className=' flex mb-1 px-14 py-1 hover:bg-slate-400 '><RestaurantMenuIcon/><Link href={"/product"}>Menu</Link></li>
          <li className=' flex mb-1 px-14 py-1 hover:bg-slate-400 '><AccountCircle/><Link href={"/profile"}>Profile</Link></li>
          <li className=' flex mb-1 px-14 py-1 hover:bg-slate-400 '><Info/><Link href={"/about"}>About</Link></li>
        </ul>
      </Drawer>
    </div>
  );
}
