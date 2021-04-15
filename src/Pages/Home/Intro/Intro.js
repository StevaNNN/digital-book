import React, { Component } from 'react';
import classes from './Intro.module.scss';
import Button from "../../../Components/UI/Button/Button";
import {ALL_TITLES} from "../../../Util";
import data from '../../../data.json';

class Intro extends Component {

    state = {
        searchedTerm: '',
        searchedBook: {}
    }

    onSearchTerm = (event) => {
        this.setState({
            searchedTerm: event.target.value
        })
    }

    onRecordClick = (title) => {
        data.books.forEach(book => {
            if(book.title === title)  {
                this.setState({
                    searchedBook: book
                })
            }
        })
    }

    render() {
        const {searchedTerm} = this.state;
        let filteredTitle = searchedTerm ? ALL_TITLES.filter((item) => item.includes(searchedTerm)) : ALL_TITLES;

        return(
            <section className={`db-section ${classes.Intro}`}>
                <div className={classes.InputWrapper}>
                    <h1 className={classes.Title}>Digital audio books and eBooks</h1>
                    <div className={classes.Input}>
                        <div>
                            <input
                                value={searchedTerm}
                                onChange={this.onSearchTerm}
                                type={"text"}
                            />
                            <Button iconClass={'db-icon db-search'} primary/>
                        </div>
                        <ul className={`${searchedTerm !== '' ? classes.visible: ''}`}>
                            <p>Results:</p>
                            {filteredTitle.length ? filteredTitle.map((title, index) => {
                                return(
                                    <li key={index} onClick={this.onRecordClick.bind(this, title)}>{title}</li>
                                )
                            }) : <li>No searched results</li>}
                        </ul>
                    </div>
                </div>
                <div className={classes.BackgroundPlaceholder}>

                </div>
            </section>
        )
    }
}

export default Intro;