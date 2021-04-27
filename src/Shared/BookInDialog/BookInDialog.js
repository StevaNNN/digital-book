import React from 'react';
import Button from '../../Components/UI/Button/Button';
import classes from './BookInDialog.module.scss';

const bookInDialog = (props) => {
    
    const {
        title,
        author,
        thumbnail,
        description,
        link
    } = props;

    const onClickBuy = (e, link) => {
        e.preventDefault();
        const win = window.open(link, '_blank');
        if(!win != null) {
            win.focus();
        }
    }

    return (
        <>
            <div className={classes.bookTop}>
                <div>
                    <div>
                        <span className={`db-text-color db-font-semibold`}>Title:</span>
                        <h3 className={`db-text-color-dark`}>{title}</h3>
                    </div>
                    <div>
                        <span className={`db-text-color db-font-semibold`}>Author:</span>
                        <h4 className={`db-text-color-dark`}>{author}</h4>
                    </div>
                    <div>
                        <span className={`db-text-color db-font-semibold`}>Description:</span>
                        <p className={`db-text-color-dark`}>{description}</p>
                    </div>
                </div>
                <div className={classes.bookWrapper}>
                    <img src={thumbnail} alt={title}/>
                </div>
            </div>
            <div className={classes.bookBottom}>
                <Button
                    large
                    primary
                    onClick={(event) => onClickBuy(event, link)}
                >
                    Buy
                </Button>
            </div>
        </>
    );
};

export default bookInDialog;