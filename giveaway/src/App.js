import Home from "./components/homePage/Home.js";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import LogOut from "./components/login/logOut/LogOut";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StepsBase from "./components/sendItems/StepsBase";
import SendStep1 from "./components/sendItems/sendStep1/SendStep1";
import SendStep2 from "./components/sendItems/sendStep2/SendStep2";
import SendStep3 from "./components/sendItems/sendStep3/SendStep3";
import SendStep4 from "./components/sendItems/sendStep4/SendStep4";
import SendSummary from "./components/sendItems/sendSummary/SendSummary";
import SendSuccesful from "./components/sendItems/sendSuccesful/SendSuccesful";

function App() {
  return (
    <>  
      <Router>
        <Switch>
          <Route path="/home" component={Home} />           
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />
          {/* /wylogowano below is eqivalent to /logOut, in polish lang due to project requirements */}
          <Route path="/wylogowano" component={LogOut} /> 
          <Route path="/steps" component={StepsBase} />      
          <Route path="/" component={Home} />  
        </Switch>         
      </Router> 
    </>
  );
}

export default App;
