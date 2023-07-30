import { Button } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
// import { useAppThemeConst } from '../shared/contexts'
import { useDrawerConstext } from '../shared/contexts'
export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeConst()
  const { toggleDrawerOpen } = useDrawerConstext()
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
            Teste
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
