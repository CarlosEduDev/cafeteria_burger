import { AppRoutes } from "./routes"

import { BrowserRouter } from "react-router-dom"

import { MenuLateral } from "./shared/componets/Menu_Lateral"
import { AppThemeProvider, DrawerProvider } from "./context"



function App() {
  

  return (
    <AppThemeProvider>
      <DrawerProvider>
<BrowserRouter>

        <MenuLateral>
         <AppRoutes/>
        </MenuLateral>

</BrowserRouter>
      </DrawerProvider>
      

    </AppThemeProvider>
    
   
  )
}

export default App
