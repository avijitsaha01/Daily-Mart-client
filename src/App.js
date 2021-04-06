import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/Header/Header';
import Search from './component/Search/Search';
import Home from './component/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      <Home></Home>
    </div>
  );
}

export default App;
