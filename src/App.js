import React, {Component} from 'react';
import Viewport from "./Containers/Viewport/Viewport";
import classes from './App.module.scss';
import './Theme/main.scss';

class App extends Component {

    render() {
        return (
            <div className={classes.app}>
                <Viewport />
            </div>
        );
    }
}

export default App;