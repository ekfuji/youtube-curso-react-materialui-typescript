import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppThemePovider } from './shared/contexts'

export const App = () => {
  return (
    <AppThemePovider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemePovider>
  )
}
