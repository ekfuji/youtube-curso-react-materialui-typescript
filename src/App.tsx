import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppThemePovider } from './shared/contexts'
import { MenuLateral } from './shared/components'

export const App = () => {
  return (
    <AppThemePovider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemePovider>
  )
}
