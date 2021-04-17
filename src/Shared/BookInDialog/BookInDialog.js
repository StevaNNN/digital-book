import React from 'react';
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
        <div>
            <h3>{title}</h3>
            <h6>{author}</h6>
            <p style={{maxWidth: '300px'}}>{description}</p>
            <img style={{maxWidth: '300px', height: '300px'}} src={thumbnail} alt={title}/>
            <a
                onClick={(event) => onClickBuy(event, link)}
                aria-label={'trt'}
                href={"/"}
            >
                Buy
            </a>
        </div>
    );
};

export default bookInDialog;