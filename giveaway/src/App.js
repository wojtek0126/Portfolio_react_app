import Home from "./components/homePage/Home.js";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import LogOut from "./components/login/logOut/LogOut";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StepsBase from "./components/sendItems/StepsBase";
import LoginSuccesful from "./components/login/LoginSuccesful.js";
import SignUpSuccesful from "./components/signUp/SignUpSuccesful.js";
import StepsBase2 from "./components/sendItems/StepBase2.js";
import StepsBase3 from "./components/sendItems/StepBase3.js";
import StepsBase4 from "./components/sendItems/StepBase4.js";
import StepsBase5 from "./components/sendItems/StepBase5.js";
import StepsBase6 from "./components/sendItems/StepBase6.js";


function App() {
  return (
    <>  
      <Router>
        <Switch>
          <Route path="/home" component={Home} />           
          <Route path="/login" component={Login} />
          <Route path="/signUp" component={SignUp} />        
          <Route path="/logout" component={LogOut} /> 
          <Route path="/loginSuccesful" component={LoginSuccesful} /> 
          <Route path="/signUpSuccesful" component={SignUpSuccesful} /> 
          <Route path="/step1" component={StepsBase} />  
          <Route path="/step2" component={StepsBase2} /> 
          <Route path="/step3" component={StepsBase3} /> 
          <Route path="/step4" component={StepsBase4} />           
          <Route path="/stepSummary" component={StepsBase5} /> 
          <Route path="/stepsSuccess" component={StepsBase6} />     
          <Route path="/" component={Home} />  
        </Switch>         
      </Router> 
    </>
  );
}

export default App;
