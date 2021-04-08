import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header';
import Search from './component/Search/Search';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './component/Order/Order';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Search></Search>
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/orders">
            <Header></Header>
            <Order></Order>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
