
import './App.css';
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import User from "./users"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CreateUser from './createuser';
import EditUser from './edituser';
import {UserProvider} from "./usercontext";
import usercontext from "./usercontext";

function App() {

  return (
    <>
      <Router>
        <div id="wrapper"> 
          <Sidebar></Sidebar>
        
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <UserProvider>
              <Topbar></Topbar>
              <div className="container-fluid">
                <Switch>
                  <Route path="/" exact={true} >
                  <Dashboard></Dashboard>
                  </Route>
                  <Route path="/user"  exact={true}>
                    <User></User>
                  </Route>
                  <Route path="/createuser"  exact={true}>
                   <CreateUser></CreateUser>
                  </Route>
                  <Route path="/edituser/:id" component={EditUser} exact={true}/> {/*to get the value of props using component attribute*/}
                </Switch>
               
              </div>
              </UserProvider>
            </div>

          </div>

        </div>
      </Router>

    </>
  );

}

export default App;