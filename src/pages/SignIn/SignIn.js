import React from 'react';
import {Link} from "react-router-dom";

const SignIn = () => (
    <div>
        <h1>Sign up</h1>
        <input placeholder="Login" />
        <input placeholder="Password" />
        <button>Submit</button>
        <Link to="/signIn">Sign In</Link>
        <Link to="/singnUp">Sign In</Link>
        <Link to="/resetPassword">Sign In</Link>
    </div>
);

export default SignIn;
