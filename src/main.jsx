import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import router from './router.jsx';
import { createTheme, CssBaseline, ThemeProvider} from '@mui/material';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#69932e',
    },
    secondary: {
      main: '#0b3c49',
    },

  },
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
