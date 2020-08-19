import React, {useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import {Login, Terminals, Buyers} from "./pages";
import Sidebar from "./components/Sidebar";
import Button from "react-bootstrap/Button";
import user, {initialState} from "./reducers/user";
import {setUserData} from "./actions/user";

const App = () => {
   const [state, dispatch] = useReducer(user, initialState);
   const {userLogin, message, avatar} = state;

   const handleSignIn = (value) => {
      fetch(`https://api.github.com/users/${value}`)
         .then((response) => response.json())
         .then(data => {
            const {avatar_url, login, message} = data
            dispatch(setUserData({avatar_url, login, message}))
         })
         .catch(error => console.error(error))
   }

   return (
      <div className="wrapper d-flex align-items-stretch">
         <Sidebar avatar={avatar} />


         <div id="content" className="p-4 p-md-5">
            <div className="jumbotron p-3 mb-5">
               <Button className="btn-primary">Скрыть \ Показать сайдбар</Button>
            </div>
            <Route exact path='/'
                   render={() =>
                      <Login userLogin={userLogin} message={message} handleSignIn={handleSignIn}/>}
            />
            <Route path='/terminals' component={Terminals}/>
            <Route path='/buyers' component={Buyers}/>
         </div>
      </div>
   );
}

export default App;
