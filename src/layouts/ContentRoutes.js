import React, { Component } from 'react';

import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import styles from './ContentRoutes.scss';

import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

const { Content } = Layout;

export const ROUTES_ITEMS = [
    {
        to: '/',
        text: '龙猫',
        icon: 'home',
        exact: true,
        component: HomePage,
    }, {
        to: '/about',
        text: '关于',
        icon: 'info-circle-o',
        component: AboutPage,
    },
];

const ROUTES = ROUTES_ITEMS.map(route => (
    <Route key={route.to} path={route.to} exact={route.exact} component={route.component} />
));

export default class ContentRoutes extends Component {

    state = {};

    render() {
        return (
            <Content className={styles.content}>
                <Switch>

                    {ROUTES}

                    <Route component={NotFoundPage} />

                </Switch>
            </Content>
        );
    }

}
