import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import classes from './App.module.scss';
import Intro from "./containers/Intro/Intro";
import './theme/main.scss';

class App extends Component {

    render() {

        return (
            <div className={classes.app}>
                <Layout>
                    <Intro/>
                </Layout>
            </div>
        );
    }
}

export default App;