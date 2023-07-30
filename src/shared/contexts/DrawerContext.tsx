import { createContext, useState, useCallback, useContext } from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

interface IAppDrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerConstext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}
