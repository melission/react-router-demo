import { Outlet, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import HomeIcon from '@mui/icons-material/Home';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });
const storedMode = localStorage.getItem('colorMode')
const prefferedMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const navbarBG = theme.palette.mode === 'dark' ? "dark" : "light";
  const navbarTextColour = navbarBG === 'dark' ? "light" : "dark"

  return (
    <Box className="App" bgcolor={(storedMode || prefferedMode)}>
      <Navbar bg={navbarBG} variant={navbarBG}>
        <Container>
          <Navbar.Brand><Link style={{ color: 'inherit' }} to={`/`}><HomeIcon /></Link></Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link><Link className="text-decoration-none" style={{ color: 'inherit' }} to={`/category/`}>Category</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none" style={{ color: 'inherit' }} to={`products`}>Products</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none" style={{ color: 'inherit' }} to={`factory`}>Factory</Link></Nav.Link>
            <Nav.Link><Link className="text-decoration-none" style={{ color: 'inherit' }} to={`login`}>Log in</Link></Nav.Link>
          </Nav>
          <Box>
            {/* <div className='themeName'>{theme.palette.mode} mode</div> */}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Container>

      </Navbar>
      {/* <ToggleColorMode /> */}
      <Outlet />
    </Box>
  );
}

export default function ToggleColorMode() {

  //changes each time when icon button is clicked
  const [mode, setMode] = React.useState(storedMode || prefferedMode);

  // Save the color mode to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('colorMode', mode);
  }, [mode]);

  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode)
  };

  const colorMode = {
    toggleColorMode,
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App>
          <Outlet />
        </App>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

