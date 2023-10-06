import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";

import { TeamDataProvider } from "./context";

import Layout from './components/Layout/Layout';
import MainPage from './components/Pages/MainPage';
import UsersPage from "./components/Pages/UsersPage";
import SignUpPage from "./components/Pages/SignUpPage";
import Page404 from "./components/Pages/404";

import './App.scss';
import UserPage from "./components/Pages/UserPage";

function App() {

  const theme = createTheme({
    palette: {
      error: {
        main: '#CB3D40'
      },
    },
    typography: {
      fontFamily: [
        'Nunito',
        'sans-serif'
      ].join(','),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <TeamDataProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}/>
                <Route path='users' element={<UsersPage />}/>
                <Route path='users/:id' element={<UserPage />}/>
                <Route path='signup' element={<SignUpPage />}/>
                <Route path='*' element={<Page404 />}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </TeamDataProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
