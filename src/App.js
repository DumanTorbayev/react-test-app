import React, {createContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Redirect} from "react-router-dom";
import {Login, Terminals, Buyers, Buyer} from "./pages";
import Sidebar from "./components/Sidebar";
import Button from "react-bootstrap/Button";
import {useCookies} from 'react-cookie';
import {initialState} from "./reducers/buyers";

const buyerData = createContext(initialState.buyers);

const App = () => {
   const [cookie, setCookies] = useCookies(undefined);

   return (
      <div className="wrapper d-flex align-items-stretch">
         <Sidebar cookie={cookie}/>


         <div id="content" className="p-4 p-md-5">
            <div className="jumbotron p-3 mb-5">
               <Button className="btn-primary">Скрыть \ Показать сайдбар</Button>
            </div>
            <Route exact path='/'>
               <Login setCookies={setCookies} cookie={cookie}/>
            </Route>
            <Route exact path="/terminals">
               {'login' in cookie ? <Terminals/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/buyers">
               {'login' in cookie ? <Buyers/> : <Redirect to="/"/>}
            </Route>
            <Route path='/buyers/:buyerId'>
               <Buyer buyerData={buyerData} />
            </Route>
         </div>
      </div>
   );
}

export default App;
