import React from 'react';
/* import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import User from './routes/User';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Register from './routes/Register'; */
export default [
    {
        path: '/',// /xx
        component: () => import('./routes/IndexPage'),
        routes: [
            {
                path: '/',
                exact: true,
                component: () => import('./routes/Home'),
                redirect: true
            },
            {
                path: '/user',
                component: () => import('./routes/User')
            },
            {
                path: '/profile',
                component: () => import('./routes/Profile')
            },
            {
                path: '/login',
                component: () => import('./routes/Login')
            },
            {
                path: '/register',
                component: () => import('./routes/Register')
            },
        ]
    }
]
