import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { Route, Redirect } from "react-router-dom";
import { userService } from "../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from '../store/actions/userActions'
import { useLocation } from 'react-router-dom';

export function PrivateRoute({ children, ...rest }) {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const landingPath = useLocation();
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const user = dispatch(loadUser())
        if (user) {
            console.log(user)
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])


    return (
        <Route {...rest}
            render={() => isLoggedIn ? (children) : (<Redirect to={{ pathname: "/" }} />)
            }
        />
    );
}



