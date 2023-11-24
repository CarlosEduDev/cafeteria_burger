import { Box, Typography } from "@mui/material"
import { LayoutBasePagina } from "../layout"



export const Snacks: React.FC = () => {


  return(
    <Box>
      <LayoutBasePagina titulo="Lanches">
        <Box>
          <Typography>Lanches:</Typography>

        </Box>
      </LayoutBasePagina>

    </Box>
  )
}