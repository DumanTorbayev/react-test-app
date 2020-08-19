import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router-dom";
import {Login, Home} from "./pages";

const App = () => {
    const [data, setData] = useState('');
    const {login, message} = data;

    const handleSignIn = (value) => {
        fetch(`https://api.github.com/users/${value}`)
            .then((response) => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }

    return (
        <div className="container">
            <Route exact path='/'
                   render={() =>
                       <Login login={login} message={message} handleSignIn={handleSignIn}/>}
            />
            <Route path='/home' render={() => <Home/>}/>
        </div>
    );
}

export default App;
