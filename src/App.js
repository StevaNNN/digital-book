import React, { Component } from 'react';
import Layout from "./Hoc/Layout/Layout";
import classes from './App.module.scss';
import Intro from "./Containers/Intro/Intro";
import './Theme/main.scss';

class App extends Component {

    render() {

        return (
            <div className={classes.app}>
                <Layout>
                    <Intro/>
                    <Intro/>
                    <Intro/>
                    <Intro/>
                </Layout>
            </div>
        );
    }
}

export default App;