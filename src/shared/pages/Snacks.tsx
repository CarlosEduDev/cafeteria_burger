import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"
import { LayoutBasePagina } from "../layout"



export const Snacks: React.FC = () => {

  const theme  = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))//MEDIA QUERY
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))//MEDIA QUERY


  return(
    <Box>
      <LayoutBasePagina titulo="Lanches">
        <Box>

        </Box>
      </LayoutBasePagina>

    </Box>
  )
}