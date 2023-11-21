import { createContext, useCallback, useContext, useState } from "react"

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface IDrawerProviderProps{
  children: React.ReactNode
}

interface IDrawerOption{
  icon: any,
  label:string,
  path: string
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({children}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, [])

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions)
  }, []);

  return(
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions, toggleDrawerOpen,  }}>
      {children}
    </DrawerContext.Provider>
  )
}