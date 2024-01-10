import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Greeting />,
    },

  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
