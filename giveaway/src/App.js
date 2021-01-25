import Home from "C:/CodersLab/Portfolio_react_app/giveaway/src/components/homePage/Home.js";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>  
      <Router>
        <Switch>
          <Route path="/home" component={Home} />           
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />  
        </Switch>         
      </Router> 
    </>
  );
}

export default App;
