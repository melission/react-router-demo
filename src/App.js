import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./index.css";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  // console.log(colorMode)

  return (
    <Box className="App"
    sx={{
      // display: 'flex',
      // width: '100%',
      // alignItems: 'center',
      // justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'text.primary',
      // borderRadius: 1,
      // p: 3,
    }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap" rel="stylesheet" />

        <link rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" 
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
        crossorigin="anonymous"></link>
      </head>

      <Navbar bg="light"  variant="light">
        <Container>
          <Navbar.Brand href={`/`}>Basic Page</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={`/category/`}>Category</Nav.Link>
            <Nav.Link href={`/products/`}>Products</Nav.Link>
            <Nav.Link href={`/factory/`}>Factory</Nav.Link>
            <Nav.Link href={`/login/`} >Log in</Nav.Link>
          </Nav>
          {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </Container>
      </Navbar>
      {/* <ToggleColorMode /> */}
      <Outlet />
      </Box>
  );
}

export default function ToggleColorMode() {
  const storedMode = localStorage.getItem('colorMode')

  //changes each time when icon button is clicked
  const [mode, setMode] = React.useState(storedMode || 'light');

  // Save the color mode to local storage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('colorMode', mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
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
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

