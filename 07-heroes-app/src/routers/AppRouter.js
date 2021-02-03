import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';


const AppRouter = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
         <Router>
            <div>
                <Switch>

                    <PublicRoute
                        exact path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ user.logged }
                    />

                    <PrivateRoute
                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated={ user.logged }
                    />

                    {/* <Route
                        exact path="/login"
                        component={ LoginScreen }
                    />  

                    <Route
                        path="/"
                        component={ DashboardRoutes }
                    />   */}
                   
                </Switch>
            </div>
        </Router>
    );
    
}

export default AppRouter
