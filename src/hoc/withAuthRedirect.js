import React from 'react';
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const [state , dispath] = useReducer()

    const RedirectComponent = () => {
        if(!this.props.isAuth) return < Redirect to="/login" />

        return (
           <Component {...this.props} />
        )
    }

    return RedirectComponent
}
