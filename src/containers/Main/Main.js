import React, { Component } from 'react';
import classes from './Main.module.scss';
import Intro from "../Intro/Intro";

class Main extends Component {

    render() {
        return(
            <main className={classes.home}>
                <Intro />
            </main>
        )
    }
}

export default Main;