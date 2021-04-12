import React, { Component } from 'react';
import classes from './Intro.module.scss';
import Button from "../../../Components/UI/Button/Button";

class Intro extends Component {

    render() {

        return(
            <section className={`db-section ${classes.Intro}`}>
                <h1>Digital audio books and eBooks</h1>
                <div>
                    <input type={"text"}/>
                    <Button iconClass={'db-icon db-search'} primary rounded/>
                </div>
            </section>
        )
    }
}

export default Intro;