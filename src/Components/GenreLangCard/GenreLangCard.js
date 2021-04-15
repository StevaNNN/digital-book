import React from 'react';
import classes from './GenreLangCard.module.scss';

const genreLangCard = (props) => {

    const {
        label,
        counter,
        iconClass,
        onClick
    } = props;

    return(
        <div
            className={classes.GenreLangCard}
            tabIndex={0}
            onClick={onClick}
        >
            <i aria-hidden="true" className={iconClass}/>
            {label && <span className={classes.Label}>{label}</span>}
            {counter && <span className={classes.Counter}>{counter}</span>}
        </div>
    )
}

export default genreLangCard;