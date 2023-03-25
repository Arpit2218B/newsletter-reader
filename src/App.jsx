import './App.css';
import useWatchLocalStorage from './hooks/useLocalStorage';
import Authentication from './pages/Authentication';
import Details from './pages/details';
import List from './pages/list';
import { EVENT_NAME } from './utils/constants';

const App = () => {
  const loggedInData = useWatchLocalStorage('clientId', EVENT_NAME);

  if(!loggedInData) {
    return <Authentication />
  }

  return (
    <div className="App" id="app">
      {/* <List /> */}
      <Details />
    </div>
  )
}

export default App
