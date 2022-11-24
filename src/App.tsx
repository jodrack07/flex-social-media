import Login from './pages/login/Login';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Register from './pages/register/Register';
import NotFound from './pages/notFound/NotFound';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { ReactElement, useEffect } from 'react';
import { useAppSelector } from './app/hooks';

type ProtectedRoutesProp = {
  children: ReactElement;
};

function App() {
  const darkTheme = useAppSelector((state) => state.darkTheme.darkTheme);
  const KEY = 'DARK_THEME';

  const currentUser = useAppSelector(state => state.auth.user);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(darkTheme));
  }, [KEY, darkTheme]);

  const ProtectedRoutes = ({ children }: ProtectedRoutesProp) => {
    if (!currentUser) {
      return <Navigate to='/auth/login' />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoutes>
          <Layout />
        </ProtectedRoutes>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/profile/:id', element: <Profile /> },
      ],
      errorElement: <NotFound />,
    },
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/register',
      element: <Register />,
    },
  ]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
