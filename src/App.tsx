import './App.scss';
import Login from './pages/login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/register/Register';
import NotFound from './pages/notFound/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: '/auth/login',
      element: <Login />,
    },
    {
      path: '/auth/register',
      element: <Register />
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
