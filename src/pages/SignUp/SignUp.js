import React from 'react';
import { useFormik } from 'formik';
import {Link} from "react-router-dom";
import axios from "axios";


const SignUp = () => {
        const { values, handleChange, handleSubmit, setErrors, errors }  = useFormik({
                initialValues: {
                        login: '',
                        password: '',
                },
            onSubmit: (formValues) => {
                    axios.get('https://samples.openweathermap.org/data/2.5/forecast/daily?zip=94040&appid=0534bcc694333618cbcd509b5d7ef813').then((result) => {
                        console.log(result)
                        localStorage.setItem()
                        window.location.href = '/';
                    }).catch(( e) =>
                        setErrors({
                            password: "Some shit"
                        }))
            }
        });
        return (
            <form onSubmit={handleSubmit}>
                    <h1>Sign up</h1>
                    <input placeholder="Login" value={values.login} name="login" onChange={handleChange} />
                    <input placeholder="Password" value={values.password} name="password" onChange={handleChange} />
                    <small>{errors.password}</small>
                    <button type="submit">Submit</button>
                    <Link to="/signIn">Sign In</Link>
                    <Link to="/singnUp">Sign In</Link>
                    <Link to="/resetPassword">Sign In</Link>
            </form>
        )
    };

export default SignUp;
