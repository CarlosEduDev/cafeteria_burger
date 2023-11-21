import { useTheme, useMediaQuery, Box, IconButton, 
Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

import { useDrawerContext } from "../../context"

interface ILayoutBasePaginaProps {
  children: React.ReactNode;
  titulo: string
}

export const LayoutBasePagina: React.FC<ILayoutBasePaginaProps> = ({children, titulo}) => {

  const theme = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))//MEDIA QUERY
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))//MEDIA QUERY

  const { toggleDrawerOpen } = useDrawerContext()

  return(
    <Box>

    <Box padding={1} gap={1.2} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display='flex' alignItems='center'>
      {smDown && (
        <IconButton onClick={toggleDrawerOpen}>
          <MenuIcon/>
        </IconButton>
      )}

<Typography
variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
overflow='hidden'
whiteSpace='nowrap'
textOverflow='ellipsis'
>
{titulo}
</Typography>

    </Box>

    <Box>
      {children}
    </Box>

    </Box>
  )
}