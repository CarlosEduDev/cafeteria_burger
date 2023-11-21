
import { Box, Typography, Grid, useTheme, useMediaQuery} from "@mui/material"
import { LayoutBasePagina } from "../layout";


export const Home: React.FC = () => {

  const theme = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))//MEDIA QUERY
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))//MEDIA QUERY

  return(
    <LayoutBasePagina titulo="Burger Snacks">
      <Box width='100%' display='flex'>
        <Box>
          <Typography
          variant={smDown ? 'h6' : mdDown ? 'h6' : 'h5'}
          >Nós temos os melhores lanches para você!</Typography>
        </Box>
        <Grid container >

          <Grid container item spacing={2}>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              
            </Grid>

          </Grid>

        </Grid>
      </Box>
    </LayoutBasePagina>
  )
}