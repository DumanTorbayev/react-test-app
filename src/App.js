import React, {createContext, useReducer, useState} from 'react';
import {Route, Redirect} from "react-router-dom";
import {Login, Terminals, Buyers, Buyer} from "./pages";
import Sidebar from "./components/Sidebar";
import {useCookies} from 'react-cookie';
import buyersReducer, {initialState} from "./reducers/buyers";
import burgerIcon from './assets/images/open-menu.svg';
import {setFilterByName} from "./actions/buyers";

const buyerData = createContext(initialState.buyers);

const App = () => {
   const [cookie, setCookies] = useCookies(undefined);
   const [toggleSidebar, setToggleSidebar] = useState(false);
   const [state, dispatch] = useReducer(buyersReducer, initialState);

   const handleToggleSidebar = () => {
      setToggleSidebar(!toggleSidebar);
   }

   const filtersByName = (value) => {
      dispatch(setFilterByName(value));
   }

   return (
      <div className="wrapper d-flex align-items-stretch">
         <Sidebar cookie={cookie} toggleSidebar={toggleSidebar}/>


         <div id="content" className="p-4 p-md-5">
            <div className="jumbotron p-3 mb-5">
               <button  className="btn btn-primary"
                        onClick={handleToggleSidebar}
               >
                  <img src={burgerIcon} alt=""/>
               </button>
            </div>
            <Route exact path='/'>
               <Login setCookies={setCookies} cookie={cookie}/>
            </Route>
            <Route exact path="/terminals">
               {'login' in cookie ? <Terminals/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/buyers">
               {'login' in cookie
                   ? <Buyers buyersData={buyerData} filtersByName={filtersByName}/>
                   : <Redirect to="/"/>}
            </Route>
            <Route path='/buyers/:buyerId'>
               <Buyer buyerData={buyerData} filtersByName={filtersByName} />
            </Route>
         </div>
      </div>
   );
}

export default App;
