import { useEffect } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import { useDrawerContext } from "../context"

//Pages
import { Home } from "../shared/pages/Home";
import { Snacks } from "../shared/pages/Snacks";


export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
     { icon: 'house',
      label: 'Página inicial',
      path: '/pagina-inicial'
    },
     { icon: 'people',
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