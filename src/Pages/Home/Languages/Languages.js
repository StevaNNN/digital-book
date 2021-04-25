import React from 'react';
// import classes from './Languages.module.scss';
import {ALl_LANGUAGES, LANG_COUNTERS} from "../../../Util";
import GenreLangCard from "../../../Components/GenreLangCard/GenreLangCard";

const languages = props => {
    
    const {
        goToSpecificLanguage
    } = props;

    return(
        <section className={`db-section`}>
            <div className={`db-section-wrapper`}>
                <div className={'db-section-header'}>
                    <h1 className={'db-section-title'}>Languages</h1>
                </div>
                <div className={`db-card-wrapper`}>
                    {ALl_LANGUAGES.map((item, index) => {
                        return(
                            <GenreLangCard
                                onClick={goToSpecificLanguage.bind(this, item)}
                                key={index}
                                iconClass={`${item.toLowerCase()}`}
                                label={item}
                                counter={LANG_COUNTERS[item.toLowerCase()]}
                            />
                        )
                    })}
                </div>
            </div>


        </section>
    )
}

export default languages;