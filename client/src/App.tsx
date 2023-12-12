import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* your components */}
    </ThemeProvider>
  )
}

export default App
