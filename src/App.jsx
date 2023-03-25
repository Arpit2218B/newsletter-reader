import './App.css';
import useWatchLocalStorage from './hooks/useLocalStorage';
import Authentication from './pages/Authentication';
import Details from './pages/details';
import List from './pages/list';
import { EVENT_NAME } from './utils/constants';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);


const App = () => {
  const loggedInData = useWatchLocalStorage('clientId', EVENT_NAME);

  if(!loggedInData) {
    return <Authentication />
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
