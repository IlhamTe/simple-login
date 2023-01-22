import React, { useEffect } from "react";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PopupLogin = props => {

    const [errorMessage, setErrorMessage] = useState({})
    const [countFailedLogin, setCountFailedLogin] = useState(0)
    const [timer, setTimer] = useState(5)

    const dataUser = [
        {
            id: 1,
            name: 'Kusnandar',
            email: 'kusnandar@gmail.com',
            password: '123456',
        },
        {
            id: 2,
            name: 'Budi',
            email: 'budi@gmail.com',
            password: '123456',
        },
        {
            id: 3,
            name: 'Jimmy',
            email: 'jimmy@gmail.com',
            password: '123456',
        },
    ]

    const dataErrorMessage = {
        email: 'Invalid Email',
        password: 'Invalid Password',
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Failed Login ', countFailedLogin)

        if (countFailedLogin !== 3) {
            var { email, password } = document.forms[0]

            const getUserData = dataUser.find((user) => user.email === email.value)


            if (getUserData) {
                if (getUserData.password === password.value) {
                    alert('Login Success')
                    setCountFailedLogin(0)
                } else {
                    setErrorMessage({ name: 'password', message: dataErrorMessage.password })
                    setCountFailedLogin(countFailedLogin + 1)
                }
            } else {
                // Invalid Email
                setErrorMessage({ name: 'email', message: dataErrorMessage.email })
            }
        }
    }

    const viewErrorMessage = (errorName) =>
        errorName === errorMessage.name && (
            <div className='error'>{errorMessage.message} </div>)

    const componentForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="email" required />
                    {viewErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                    {viewErrorMessage("password")}
                </div>
                <div className="button-container">
                    {countFailedLogin !== 3
                        ? <input type="submit" value='Sign In' />
                        : <input type="button" value={'Please try again after ' + timer + ' second'} />}
                </div>
            </form>
        </div>
    );



    if (countFailedLogin === 3) {
        var thirtySeconds = 5
        var loginCountdown = setInterval(function () {
            setTimer(timer - 1)
            thirtySeconds--

            if (thirtySeconds === 0) {
                setCountFailedLogin(0)
                setTimer(5)
                clearInterval(loginCountdown)
            }
        }, 1000);

    }


    return (
        <div className="popup-box">
            <div className="box">
                {componentForm}
            </div>
        </div>
    );
};

export default PopupLogin;