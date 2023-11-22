
import { Box, Typography, Grid, Card, CardContent} from "@mui/material"

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import WineBarIcon from '@mui/icons-material/WineBar';

import { LayoutBasePagina } from "../layout";


export const Home: React.FC = () => {

  return(
    <LayoutBasePagina titulo="Boas vindas!">
      <Box margin={2} display='flex'>
        <Typography variant="h5">Veja as opções que temos em Burger Snacks!</Typography>
      </Box>
     

      <Box marginLeft={2}>
        <Typography variant="h6">Nós temos:</Typography>
      </Box>
      <Box width='100%' display='flex'>
        
            <Grid container margin={3}>
               <Grid item container spacing={3}>

                  <Grid item xs={12} sm={10} md={6} lg={4}  xl={3}>
                     <Card>
                        <CardContent>  
                           <Typography variant="h2" align="center">
                              <LunchDiningIcon  style={{fontSize:'2em'}}/>
                           </Typography>
                           <Typography align="center" fontSize={20}>Lanches</Typography>
                           </CardContent>
                </Card>
              </Grid>

                  <Grid item xs={12} sm={10} md={6} lg={4}  xl={3}>
                     <Card>
                        <CardContent>  
                           <Typography variant="h2" align="center">
                              <DinnerDiningIcon  style={{fontSize:'2em'}}/>
                           </Typography>
                           <Typography align="center" fontSize={20}>Almoços</Typography>
                           </CardContent>
                </Card>
              </Grid>
                  <Grid item xs={12} sm={10} md={6} lg={4}  xl={3}>
                     <Card>
                        <CardContent>  
                           <Typography variant="h2" align="center">
                              <WineBarIcon  style={{fontSize:'2em'}}/>
                           </Typography>
                           <Typography align="center" fontSize={20}>Bebidas</Typography>
                           </CardContent>
                </Card>
              </Grid>
                  
            </Grid>
          </Grid>

        </Box>

    </LayoutBasePagina>
  )
}