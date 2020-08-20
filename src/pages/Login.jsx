import React, {useReducer, useState} from 'react';
import Form from "react-bootstrap/Form";
import {Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";
import auth, {initialState} from "../reducers/auth";
import {setUserData} from "../actions/auth";

const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

const Login = ({setCookies}) => {
   const [state, dispatch] = useReducer(auth, initialState);
   const {login, message} = state;
   const [valueLogin, setValueLogin] = useState('');
   const [password, setPassword] = useState('');
   const [passCheck, setPassCheck] = useState(true);

   const handleSignIn = (value) => {
      fetch(`https://api.github.com/users/${value}`)
         .then((response) => response.json())
         .then(data => {
            const {avatar_url, message, login} = data
            dispatch(setUserData({avatar_url, message, login}))
            setCookies('avatar', avatar_url, {path: '/'});
            console.log(data)
         })
         .catch(error => console.error(error))
   }

   const handleLoginChanges = (e) => {
      setValueLogin(e.target.value);
   }

   const handlePasswordChanges = (e) => {
      setPassword(e.target.value)
   }

   const onLogin = () => {
      if (pattern.test(password)) {
         setPassCheck(true)
         handleSignIn(valueLogin);
      } else {
         setPassCheck(false);
      }
   }

   if (login && passCheck) {
      return < Redirect to="/terminals"/>
   }

   return (
      <div className="login-container row align-items-center mx-0">
         <div className="col-sm-9 col-md-6 mx-auto pt-5 mt-5">
            <Form>
               <Form.Group>
                  <label className="form-label" htmlFor="login">Логин</label>
                  <input
                     className="form-control"
                     id="login"
                     type="text"
                     placeholder="Введите пароль"
                     onChange={handleLoginChanges}
                  />
                  {message === "Not Found"
                     ? <small
                        className="form-text text-danger pl-1">
                        Такого логина нет
                     </small>
                     : null
                  }
               </Form.Group>
               <Form.Group>
                  <label className="form-label" htmlFor="password">Пароль</label>
                  <input
                     className="form-control"
                     id="password" type="password"
                     placeholder="Пароль"
                     onChange={handlePasswordChanges}
                  />
                  {!passCheck
                     ? <small
                        className="form-text text-danger pl-1">
                        Пароль должен содержать не менее 8 символов, хотя бы 1 прописную латинскую букву и хотя бы одно
                        число
                     </small>
                     : null
                  }
               </Form.Group>
               <Button className="w-100" variant="primary" type="button" onClick={onLogin}>Войти</Button>
            </Form>
         </div>
      </div>
   );
};

export default Login;
