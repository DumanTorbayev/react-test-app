import React, {createContext, useState} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import {Login, Terminals, Buyers, Buyer, NoMatchPage} from "./pages";
import {Sidebar} from "./components";
import {useCookies} from 'react-cookie';
import {initialState} from "./reducers/buyers";
import burgerIcon from './assets/images/open-menu.svg';
import Button from "react-bootstrap/Button";

const buyerData = createContext(initialState.buyers);

const App = () => {
   const [cookie, setCookies, removeCookie] = useCookies(undefined);
   const [message, setMessage] = useState('');
   const [toggleSidebar, setToggleSidebar] = useState(false);

   const handleSetCookie = (avatar, login) => {
      if(avatar !== undefined && login !== undefined) {
         setCookies('avatar', avatar, {path: '/', maxAge: 86400});
         setCookies('login', login, {path: '/', maxAge: 86400});
      }
   }

   const handleSignIn = (value) => {
      fetch(`https://api.github.com/users/${value}`)
          .then((response) => response.json())
          .then(data => {
             const {avatar_url, message, login} = data;
             setMessage(message);
             handleSetCookie(avatar_url, login);
          })
          .catch(error => {
             console.error(error);
          })
   }

   const handleToggleSidebar = () => {
      setToggleSidebar(!toggleSidebar);
   }

   const onLogOut = () => {
      removeCookie('avatar');
      removeCookie('login');
   }

   return (
      <div className="wrapper d-flex align-items-stretch">
         <Sidebar cookie={cookie} toggleSidebar={toggleSidebar}/>
         <div id="content" className="p-3 px-md-4">
            <div className='d-flex align-items-center justify-content-between'>
               <Button  variant='primary' className='mb-4' onClick={handleToggleSidebar}>
                  <img src={burgerIcon} alt=""/>
               </Button>
               { 'avatar' in cookie && 'login' in cookie
                   ? <Button  variant='primary' className='mb-4' onClick={onLogOut}>Выход</Button>
                   : null
               }
            </div>
            <Switch>
               <Route exact path='/'>
                  <Login cookie={cookie} handleSignIn={handleSignIn} message={message}/>
               </Route>
               <Route exact path="/terminals">
                  {'login' in cookie ? <Terminals/> : <Redirect to="/"/>}
               </Route>
               <Route exact path="/buyers">
                  {'login' in cookie ? <Buyers buyersData={buyerData}/> : <Redirect to="/"/>}
               </Route>
               <Route path='/buyers/:buyerId'>
                  <Buyer buyerData={buyerData}/>
               </Route>
               <Route component={NoMatchPage} />
            </Switch>
         </div>
      </div>
   );
}

export default App;
