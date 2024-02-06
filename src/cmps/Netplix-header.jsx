import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { infoService } from '../services/infoSevice';
import { AppVideo } from './App-video';
import { DropDown } from './DropDown';
import { FilterMedia } from './FilterMedia';
import { loadUser } from '../store/actions/userActions'
import { useDispatch, useSelector } from "react-redux";

export const NetplixHeader = ({ onChangeFilter }) => {
    const { loggedinUser } = useSelector((state) => state.userModule)
    const info = infoService.getHeaderMedia()
    const location = useLocation()
    const [currMedia, setCurrMedia] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        var currnetMedia = info.filter((inf) => inf.path === location.pathname)
        setCurrMedia([...currnetMedia])
    }, [location])

    useEffect(() => {
        dispatch(loadUser())
    }, [])

    return (
        <section className='app-header'>
            <nav className='flex align-center space-between'>
                <section className='flex align-center gap10'>
                    <Link to="/media" className='logo log-nav'>NetPlix</Link>
                    {location.pathname === '/kids' ? '' : <div className="flex align-center links">
                        <NavLink activeClassName='is-active' exact to={{ pathname: "/media" }}>Home</NavLink>
                        <NavLink activeClassName='is-active' exact to={{ pathname: "/movies" }} >Movies</NavLink>
                        <NavLink activeClassName='is-active' to={{ pathname: "/tv-series" }}>TV-Series </NavLink>
                        <NavLink activeClassName='is-active' to={{ pathname: "/user-list" }}>My list</NavLink>
                    </div>}
                </section>
                <section className='flex align-center'>
                    {location.pathname !== '/user-list' && <FilterMedia onChangeFilter={onChangeFilter} />}
                    <DropDown loggedinUser={loggedinUser} />
                </section>
            </nav>
            {currMedia && location.pathname !== '/user-list' && <AppVideo currMedia={currMedia} />}
        </section >
    );
};

