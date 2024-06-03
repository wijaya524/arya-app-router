"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function DrawerContentUI() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
        {["All mail", "Trash", "Spam"].map((text, index) => (
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

  const { status }: { status: string } = useSession();

  return (
    <nav className=" drawer drawer-mobile flex items-center justify-between">
      <Button className=" w-[20%]" onClick={toggleDrawer(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className=""
        >
          <path d="M74-184v-136h812v136H74Zm0-228v-136h812v136H74Zm0-229v-136h812v136H74Z" />
        </svg>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <ul className=" menu font-semibold p-4 w-[50vw] min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {status === "authenticated" ? (
            <Button variant="contained" type="submit" onClick={() => signOut()}>
              Log out
            </Button>
          ) : (
            <Button variant="contained" type="submit" onClick={() => signIn()}>
              sign in
            </Button>
          )}
          <button className="flex py-1 items-center gap-5 hover:bg-gray-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#e8eaed"
            >
              <path d="M230.26-190.26h148.46v-242.56h202.56v242.56h148.46v-374.61L480-753.08 230.26-564.96v374.7ZM180-140v-450l300-225.77L780-590v450H531.03v-242.57H428.97V-140H180Zm300-331.87Z" />
            </svg>
            <Link href="/">Home</Link>
          </button>
          <button className="flex py-1 items-center gap-5 hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#e8eaed"
            >
              <path d="m168.59-133.85-35.38-35.38 412.56-412.56q-21.05-47.8-9.36-96.79 11.69-48.98 54.44-91.57 42.02-41.62 103.41-55.39 61.38-13.77 101.87 26.46 40.64 40.64 26.33 101.62-14.31 60.97-57.41 104.74-40.44 41-88.88 53.23-48.45 12.23-94.61-7.33l-69.79 69.79 308.05 307.8-35.38 35.38-308.06-306.87-307.79 306.87ZM292.28-478 177.31-592.72q-47.9-48.15-50.45-113.66-2.55-65.52 40.91-117.47l234.97 235.39L292.28-478Z" />
            </svg>
            <Link href="/product">Menu</Link>
          </button>
          <button className="flex py-1 items-center gap-5 hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#e8eaed"
            >
              <path d="M240.92-268.31q51-37.84 111.12-59.77Q412.15-350 480-350t127.96 21.92q60.12 21.93 111.12 59.77 37.3-41 59.11-94.92Q800-417.15 800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 62.85 21.81 116.77 21.81 53.92 59.11 94.92ZM480.01-450q-54.78 0-92.39-37.6Q350-525.21 350-579.99t37.6-92.39Q425.21-710 479.99-710t92.39 37.6Q610-634.79 610-580.01t-37.6 92.39Q534.79-450 480.01-450ZM480-100q-79.15 0-148.5-29.77t-120.65-81.08q-51.31-51.3-81.08-120.65Q100-400.85 100-480t29.77-148.5q29.77-69.35 81.08-120.65 51.3-51.31 120.65-81.08Q400.85-860 480-860t148.5 29.77q69.35 29.77 120.65 81.08 51.31 51.3 81.08 120.65Q860-559.15 860-480t-29.77 148.5q-29.77 69.35-81.08 120.65-51.3 51.31-120.65 81.08Q559.15-100 480-100Zm0-60q54.15 0 104.42-17.42 50.27-17.43 89.27-48.73-39-30.16-88.11-47Q536.46-290 480-290t-105.77 16.65q-49.31 16.66-87.92 47.2 39 31.3 89.27 48.73Q425.85-160 480-160Zm0-350q29.85 0 49.92-20.08Q550-550.15 550-580t-20.08-49.92Q509.85-650 480-650t-49.92 20.08Q410-609.85 410-580t20.08 49.92Q450.15-510 480-510Zm0-70Zm0 355Z" />
            </svg>
            <Link href="/profile">Profile</Link>
          </button>
          <button className="flex py-1 items-center gap-5 hover:bg-gray-800  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#e8eaed"
            >
              <path d="M450-290h60v-230h-60v230Zm30-298.46q13.73 0 23.02-9.29t9.29-23.02q0-13.73-9.29-23.02-9.29-9.28-23.02-9.28t-23.02 9.28q-9.29 9.29-9.29 23.02t9.29 23.02q9.29 9.29 23.02 9.29Zm.07 488.46q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <Link href="#">About</Link>
          </button>
        </ul>
      </Drawer>
      <h1>Navbar</h1>
    </nav>
  );
}
