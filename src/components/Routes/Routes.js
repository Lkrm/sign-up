import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {SignIn, SignUp, ResetPassword} from "../../pages";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/signIn" component={SignIn}/>
            <Route path="/singnUp" component={SignUp}/>
            <Route path="/resetPassword" component={ResetPassword}/>
            <Route component={() => <h1>Page 404</h1>}/>
    </Switch>
    </BrowserRouter>
);

export default Routes;
