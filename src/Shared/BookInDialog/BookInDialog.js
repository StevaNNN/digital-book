import React from 'react';
import Button from '../../Components/UI/Button/Button';
import clases from './BookInDialog.module.scss';

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
        <div className={clases.BookWrapper}>
            <div>
                <div>
                    <span className={clases.label}>Title:</span>
                    <h3>{title}</h3>
                </div>
                <div>
                    <span className={clases.label}>Author:</span>
                    <h6>{author}</h6>
                </div>
                <div>
                    <span className={clases.label}>Description:</span>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <img style={{maxWidth: '300px', height: '300px'}} src={thumbnail} alt={title}/>
                <Button large primary onClick={(event) => onClickBuy(event, link)}>
                    Buy
                </Button>
            </div>
        </div>
    );
};

export default bookInDialog;