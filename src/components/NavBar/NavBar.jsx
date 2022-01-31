import React,{useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate} from "react-router-dom";
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import Product from '../../pages/Product';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = (props) =>{

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  let nombreNav = props.nombre
  const open2 = Boolean(anchorEl);
  let navigate = useNavigate();
  let isAdmin = true
  let isEmpleado = true
  let isCliente = false

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{flexGrow: 1}} component="div">
            {nombreNav}
          </Typography>
          <IconButton
            color="inherit"
            aria-controls={open2 ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onClick={handleClick}
            edge="end"
            sx={{ marginRight: '-24px',mr: 2, ...(open && { display: 'none' }) }}
          >
            <AccountCircleSharpIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open2}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem  button key={'Productos'} onClick={()=>{
              navigate("/Products");}}>
            <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary={'Productos'} />
          </ListItem>
          <ListItem button key={'Ordenes'} onClick={()=>{navigate("/Orders");}}>
            <ListItemIcon>
                <ShoppingCartTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={'Ordenes'} />
          </ListItem>
          <ListItem button key={'Usuarios'} onClick={()=>{navigate("/Users");}}>
            <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={'Usuarios'} />
          </ListItem>
          <ListItem button key={'Proveedores'} onClick={()=>{
              navigate("/Providers");}}>
            <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Proveedores'} />
          </ListItem>
          <ListItem button key={'Promociones'} onClick={()=>{navigate("/Promotion");}} >
          <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Promociones'} />
          </ListItem>
          <ListItem button key={'Empleados'} onClick={()=>{navigate("/Employees");}}>
          <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Empleados'} />
          </ListItem>
          <ListItem button key={'Clientes'} onClick={()=>{navigate("/Clients");}} >
          <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={'Clientes'} />
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export default NavBar;