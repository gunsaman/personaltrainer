
import CustomerList from './component/CustomerList';
import NavBar from './component/NavBar'
import TrainingList from './component/TrainingList';
import ShowCalendar from './component/Calendar';
import Statistics from './component/Statistics'
import {Switch, Route, Link} from 'react-router-dom';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Switch> 
          <Route path='/' exact component= {CustomerList}/>
          <Route path ="/training" component={TrainingList}/>
          <Route path ="/customers" component = {CustomerList}/>
          <Route path ="/calendar" component = {ShowCalendar}/>
          <Route path ="/statistics" component = {Statistics}/>
          <Route render={() => <h1> Page not   found</h1>}/>
        </Switch>   
    </div>
  );
}
export default App;

  


