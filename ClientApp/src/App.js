import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { AddNew } from './components/AddNew';
import { List } from './components/List';
import { Edit } from './components/Edit';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/add' component={AddNew} />
                <Route path='/list' component={List} />
                <Route path='/edit' component={Edit} />
            </Layout>
        );
    }
}