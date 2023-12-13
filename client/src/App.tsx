import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from "./components/pages/Home";
import Header from "./components/templates/Header";
const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
    </ThemeProvider>
  )
}

export default App
