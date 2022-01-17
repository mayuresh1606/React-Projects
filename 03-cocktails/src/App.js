import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Navbar} from './navbar';
import { useGlobalContext } from './context';
import Home from './pages/home'
import About from './pages/about'
import SingleCocktail from './pages/singleCocktail'
import { Loading } from './loading';

function App() {
  const{loading} = useGlobalContext();
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/singleCocktail/:id">
          {loading?<Loading/>:<SingleCocktail />}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
