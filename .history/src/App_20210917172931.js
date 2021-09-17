import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
//import './App.css';
import Reuters from './pages/Reuters';
import Markets from './pages/Markets';
import India from './pages/India';
import World from './pages/World';
import Tech from './pages/Tech';
import Commentary from './pages/Commentary';
import BreakingNews from './pages/BreakingNews';
import Money from './pages/Money';
import Sports from './pages/Sports';
import Pictures from './pages/Pictures';
import Video from './pages/Video';
import Search from './pages/Search';

function App() {
  return (
    
      <Switch>
        <Route path='/' exact={true}>
          <Reuters />
        </Route>
        <Route path='/markets'>
          <Markets />
        </Route>
        <Route path='/india'>
          <India />
        </Route>
        <Route path='/world'>
          <World />
        </Route>
        <Route path='/tech'>
          <Tech />
        </Route>
        <Route path='/commentary'>
          <Commentary />
        </Route>
        <Route path='/breaking-news'>
          <BreakingNews />
        </Route>
        <Route path='/money'>
          <Money />
        </Route>
        <Route path='/sports'>
          <Sports />
        </Route>
        <Route path='/pictures'>
          <Pictures />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;