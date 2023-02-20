import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ics from './ics.png'
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import "@fontsource/kanit";
import { styled, useTheme } from '@mui/material/styles';
import { Badge, Button, CardActions, CardMedia, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';
import avatar from './avatar.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";





const drawerWidth = 75;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: 'red',
    color: 'red',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div >
      <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DrawerHeader>
          <img src={ics} style={{ height: 40, width: 40 }} />
        </DrawerHeader>
      </Toolbar>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box sx={{ height: 42, width: 42, color: 'white', backgroundColor: '#0F1E56', minWidth: 30, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <ListAltOutlinedIcon />
              </Box>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Typography fontFamily={'Kanit'}>Place</Typography>
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },


        }}
      >
        <Toolbar sx={{ background: '#134b8a', display: 'flex', justifyContent: 'flex-end' }}>
          <Box sx={{ position: "relative", right: "15px" }}>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  variant="dot"
                >
                  <NotificationsIcon sx={{ color: 'white' }} />
                </StyledBadge>
              </IconButton>
              <Button>
                <Stack direction="row" spacing={1}>
                  <img src={avatar} />
                  <Typography color='white' fontFamily={'Kanit'}>Akkarapol</Typography>
                  <KeyboardArrowDownIcon sx={{ color: 'white' }} />
                </Stack>
              </Button>
            </Stack>
          </Box>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        className='MuiPaper-elevation0'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            borderRadius: '10px',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>

  );
}

