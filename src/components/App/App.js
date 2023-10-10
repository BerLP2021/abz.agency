import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";

import { TeamDataProvider } from "../../context";
import Layout from '../Layout/Layout';
import MainPage from '../Pages/MainPage';
import UsersPage from "../Pages/UsersPage";
import SignUpPage from "../Pages/SignUpPage";
import UserPage from "../Pages/UserPage";
import Spinner from "../UI/Spinner";

import './App.scss';

const  Page404 = lazy(() => import("../Pages/404"));

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
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<MainPage />}/>
                <Route path='users' element={<UsersPage />}/>
                <Route path='users/:id' element={<UserPage />}/>
                <Route path='signup' element={<SignUpPage />}/>
                <Route path='*' element={<Page404 />}/>
              </Route>
            </Routes>


          </Suspense>
          </BrowserRouter>
        </TeamDataProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
