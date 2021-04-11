import React, { Component } from 'react';
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import './theme/main.scss';
import classes from './App.module.scss';

class App extends Component {

    render() {

        return (
            <div className={classes.app} id={"app"}>
                <Toolbar/>
            </div>
        );
    }
}

export default App;