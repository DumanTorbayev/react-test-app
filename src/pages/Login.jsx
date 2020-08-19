import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Login = ({handleSignIn, login, message}) => {
    const [value, setValue] = useState('');

    const handleValueChanges = (e) => {
        setValue(e.target.value);
    }

    const onLogin = () => {
        handleSignIn(value);
    }

    if (login) return < Redirect to="/home"/>

    return (
        <div className="login-container row align-items-center">
            <div className="col-6 mx-auto">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <label className="form-label" htmlFor="login">Логин</label>
                        <input
                            className="form-control"
                            id="login"
                            type="text"
                            placeholder="Введите пароль"
                            onChange={handleValueChanges}
                        />
                        {message === "Not Found"
                            ? <small
                                className="form-text text-danger pl-1">
                                Такого логина нет
                            </small>
                            : null
                        }
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <label className="form-label" htmlFor="password">Пароль</label>
                        <input className="form-control" id="password" type="password" placeholder="Пароль"/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={onLogin}>Войти</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;