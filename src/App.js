import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import {Login, Terminals, Buyers} from "./pages";
import Sidebar from "./components/Sidebar";
import Button from "react-bootstrap/Button";
import {useCookies} from 'react-cookie';

const App = () => {
   const [cookie, setCookies] = useCookies(undefined);

   return (
      <div className="wrapper d-flex align-items-stretch">
         <Sidebar cookie={cookie}/>


         <div id="content" className="p-4 p-md-5">
            <div className="jumbotron p-3 mb-5">
               <Button className="btn-primary">Скрыть \ Показать сайдбар</Button>
            </div>
            <Route exact path='/'
                   render={() => <Login setCookies={setCookies}/>}
            />
            <Route path='/terminals' component={Terminals}/>
            <Route path='/buyers' component={Buyers}/>
         </div>
      </div>
   );
}

export default App;
