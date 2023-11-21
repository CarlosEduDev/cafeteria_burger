import { useEffect } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import { useDrawerContext } from "../context"

//Pages
import { Home } from "../shared/pages/Home";
import { Snacks } from "../shared/pages/Snacks";


export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
     { icon: <HomeIcon/>,
      label: 'Página inicial',
      path: '/pagina-inicial'
    },
     { icon: <RestaurantIcon/>,
      label: 'Lanches',
      path: '/snacks'
    }
    ])
  }, []);

  return(
    <Routes>

      <Route path="pagina-inicial" element={<Home/>}/>

      <Route path="snacks" element={<Snacks/>}/>

      <Route path="*" element={ <Navigate to='/pagina-inicial'/> }/>

    </Routes>

  )
}