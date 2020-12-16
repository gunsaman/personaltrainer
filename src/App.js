import logo from './logo.svg';
import './App.css';
import CustomerList from './component/CustomerList';
import TrainingList from './component/TrainingList';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div> 
        <h2 style={{background: '#b5ae48', height: '50px', width: '20%', margin: 'auto'}}>Welcome to Personal Trainer</h2>
          <div style={{display:'flex', justifyContent:'space-evenly', textDecoration:'none'}}>
          <Link to="/">Home  </Link  >{''} 
          <Link to="/training">Training </Link> {''} 
          <Link to="/customer">CustomerLists</Link >{''}
          </div>
         {/* // rendering according to the path in the url */}
        <Switch> 
          <Route exact path="/"   component={Home}/>
          <Route path ="/training" component={TrainingList}/>
          <Route path ="/customer" component = {CustomerList}/>
          <Route render={() => <h1> Page not   found</h1>}/>
        </Switch>
      </div>
     </BrowserRouter>
    </div>
  );
}
export default App;


function About() {
  return (
      <div>
          <h1>This is AboutPage</h1>
      </div>
  ) 
}

function Home() {
  return (
      <div>
          <h1>This is HomePage</h1>
      </div>
  ) 
}


