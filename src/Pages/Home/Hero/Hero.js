import React from 'react';
import classes from './Hero.module.scss';
import Button from "../../../Components/UI/Button/Button";
import {ALL_TITLES} from "../../../Util";


const Hero = props => {

    const {
        searchedTerm,
        onRecordClick,
        onSearchTerm,
        onSearchBtnClick,
        onInputBlur
    } = props;

    let filteredTitle = searchedTerm ? ALL_TITLES.filter((item) => item.includes(searchedTerm)) : ALL_TITLES;

    return(
        <section className={`db-section ${classes.Intro}`}>
            <div className={classes.InputWrapper}>
                <h1 className={classes.Title}>Digital audio books and eBooks</h1>
                <div className={classes.Input} id="trt">
                    <div>
                        <input
                            onBlur={onInputBlur}
                            value={searchedTerm}
                            onChange={onSearchTerm}
                            type={"text"}
                        />
                        <Button 
                            iconClass={'db-icon db-search'} 
                            primary
                            onClick={onSearchBtnClick}
                        />
                    </div>
                    <ul className={`${searchedTerm !== '' ? classes.visible: ''}`}>
                        <p>Results:</p>
                        {filteredTitle.length ? filteredTitle.map((title, index) => {
                            return(
                                <li key={index} onClick={onRecordClick.bind(this, title)}>{title}</li>
                            )
                        }) : <li>No searched results</li>}
                    </ul>
                </div>
            </div>
            <div className={classes.BackgroundPlaceholder}>

            </div>
        </section>
    );
}

export default Hero;