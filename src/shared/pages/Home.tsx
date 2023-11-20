import { Box, Typography } from "@mui/material"
import {Route, Routes} from 'react-router-dom'

export const Home: React.FC = () => {
  return(
    <Box>
      <Typography>Boas vindas ao Burger Snacks!</Typography>
      <Typography>Nós temos os melhores lanches que podemos oferecer!</Typography>
      <Typography>Aproveite e escolha os seus lanches favoritos.</Typography>

    </Box>
  )
}