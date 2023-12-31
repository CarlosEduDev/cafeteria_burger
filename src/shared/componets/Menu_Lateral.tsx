import { Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";

import FastfoodIcon from '@mui/icons-material/Fastfood';
import BedtimeIcon from '@mui/icons-material/Bedtime';

import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

import { useAppThemeContext, useDrawerContext } from "../../context";


interface IMenuLateralProps{
  children: React.ReactNode
}

interface IListItemLinkProps{
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}


const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    onClick?.();
  }

  return(
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
      <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label}/>

    </ListItemButton>
  )
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) =>{
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const {isDrawerOpen, drawerOptions, toggleDrawerOpen} = useDrawerContext();

  const {toggleTheme} = useAppThemeContext();

  return(
    <>
    <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

<Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
  <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
    <FastfoodIcon sx={{height: theme.spacing(12), width: theme.spacing(12)}}/>
  </Box>
  <Divider/>

  <Box flex={1}>
    <List component='nav'>
      {drawerOptions.map(drawerOptions => (
        <ListItemLink
        to={drawerOptions.path}
        key={drawerOptions.path}
        icon={drawerOptions.icon}
        label={drawerOptions.label}
        onClick={smDown ? toggleDrawerOpen : undefined}
        />
      ))}
    </List>
  </Box>

  <Divider/>
  <Box>
    <List component='nav'>
      <ListItemButton onClick={toggleTheme}>
        <ListItemIcon>
          <BedtimeIcon/>
        </ListItemIcon>

        <ListItemText primary='Alternar tema'/>
      </ListItemButton>
    </List>
  </Box>

</Box>

    </Drawer>

    <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
      {children}
    </Box>
    </>
  )
}