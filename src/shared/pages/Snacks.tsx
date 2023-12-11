
import { Box,Grid, Typography } from "@mui/material";
import { LayoutBasePagina } from "../layout";

import CheesePizza from './img/Cheese_Pizza.jpg';
import PepperoniPizza from './img/pepperoni_pizza.jpg'
import PortuguesePizza from './img/portuguesa.jpg'

export const Snacks: React.FC = () => {


  return (
    <Box>
      <LayoutBasePagina titulo="Lanches">
        <Typography variant="h5" padding={2}>Pizzas</Typography>
        <Grid container spacing={2}>
          <Grid item xs={2.3} sm={2.3} md={2.2} lg={2.2} xl={2.2}>

          <img src={CheesePizza} style={{width: '100%', marginLeft: '1rem', borderRadius: '8%'}}/>
              <Typography marginLeft={2}>Pizza de queijo</Typography>

          </Grid>

          <Grid item xs={2.3} sm={2.3} md={2.2} lg={2.2} xl={2.2}>

          <img src={PepperoniPizza} style={{width: '100%', marginLeft: '1rem', borderRadius: '8%'}}/>
              <Typography marginLeft={2}>Pizza de calabresa</Typography>

          </Grid>

          <Grid item xs={2.3} sm={2.3} md={2.2} lg={2.2} xl={2.2}>

          <img src={PortuguesePizza} style={{width: '100%', marginLeft: '1rem', borderRadius: '8%'}}/>
              <Typography marginLeft={2}>Pizza portuguesa</Typography>

          </Grid>
        </Grid>
      </LayoutBasePagina>
    </Box>
  );
};
