import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import {Buyers, Terminals} from "./index";

const Home = () => {
    return (
        <div className="row py-3">
            <div className="col-3">
                <Sidebar />
            </div>
            <div className="col-9">
                <Route path='/terminals' component={Terminals}/>
                <Route path='/buyers' component={Buyers}/>
            </div>
        </div>
    );
};

export default Home;