import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./components/pages/Home";
const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
