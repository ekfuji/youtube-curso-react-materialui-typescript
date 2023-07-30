import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { DrawerProvider, AppThemePovider } from './shared/contexts'
import { MenuLateral } from './shared/components'

export const App = () => {
  return (
    <AppThemePovider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemePovider>
  )
}
