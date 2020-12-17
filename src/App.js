
import CustomerList from './component/CustomerList';
import NavBar from './component/NavBar'
import TrainingList from './component/TrainingList';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch> 
          <Route path='/' exact component= {CustomerList}/>
          <Route path ="/training" component={TrainingList}/>
          <Route path ="/customers" component = {CustomerList}/>
          <Route render={() => <h1> Page not   found</h1>}/>
        </Switch>   
    </div>
  );
}
export default App;

  


