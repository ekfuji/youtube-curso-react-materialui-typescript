import { createContext, useState, useCallback, useContext } from 'react'


interface IDrawerOption {
  icon: string
  path: string
  label: string
}
interface IDrawerContextData {
  isDrawerOpen: boolean
  drawerOptions: IDrawerOption[]
  toggleDrawerOpen: () => void
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void
}

interface IAppDrawerProviderProps {
  children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export const useDrawerContext = () => {
  return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const toggleSetDrawerOptions = useCallback(
    (newDraweOptions: IDrawerOption[]) => {
      setDrawerOptions(newDraweOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        setDrawerOptions: toggleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
