import React from 'react';
import {Link} from "react-router-dom";

const ResetPassword = () => (
    <div>
        <h1>Reset password</h1>
        <input placeholder="Email" />
        <button>Submit</button>
        <Link to="/signIn">Sign In</Link>
        <Link to="/singnUp">Sign In</Link>
        <Link to="/resetPassword">Sign In</Link>
    </div>
);

export default ResetPassword;
