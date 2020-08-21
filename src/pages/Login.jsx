import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

const Login = ({cookie, handleSignIn, message}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState(true);

    const handleLoginChanges = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChanges = (e) => {
        setPassword(e.target.value)
    }

    const onLogin = () => {
        if (pattern.test(password)) {
            setPassCheck(true)
            handleSignIn(login);
        } else {
            setPassCheck(false);
        }
    }

    if ('login' in cookie && passCheck) {
        return < Redirect to="/terminals"/>
    }

    return (
        <div className="login-container row align-items-center mx-0">
            <div className="col-sm-9 col-md-6 mx-auto pt-5 mt-5">
                <Form>
                    <Form.Group>
                        <Form.Label htmlFor="login">Логин</Form.Label>
                        <Form.Control id="login" type="text" placeholder="Введите логин" onChange={handleLoginChanges}/>
                        {
                            message === "Not Found"
                                ? <Form.Text className=" text-danger pl-1">Такого логина нет</Form.Text> : null
                        }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="password">Пароль</Form.Label>
                        <Form.Control id="password" type="password" placeholder="Введите пароль"
                                      onChange={handlePasswordChanges}
                        />
                        {!passCheck
                            ? <Form.Text className="text-danger pl-1">
                                Пароль должен содержать не менее 8 символов, хотя бы 1 прописную латинскую букву и хотя
                                бы одно число
                            </Form.Text>
                            : null
                        }
                    </Form.Group>
                    <Button block variant="primary" type="button" onClick={onLogin}>Войти</Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;
