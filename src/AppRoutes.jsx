import React from 'react';
import Main from "./pages/Main";
import About from "./pages/About";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

const AppRoutes = () => {
    const routes = [
        {path: '/', Component: Main},
        {path: '/about', Component: About}
    ]
    return (
        <BrowserRouter>
            <div className='approutes'>
                <div className='div'>
                    <NavLink to='/'>MAIN</NavLink>
                    <NavLink to='/about'>ABOUT</NavLink>
                </div>
                {routes.map(({path, Component}) =>
                    <Route key={path} exact path={path}>
                        {({match}) =>
                            <CSSTransition
                            timeout={1000}
                            classNames='page'
                            unmountOnExit
                            in={match !=null}
                            >
                                <Component/>
                            </CSSTransition>
                        }
                    </Route>
                )}
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;