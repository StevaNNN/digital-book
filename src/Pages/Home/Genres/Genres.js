import React from 'react';
import GenreLangCard from "../../../Components/GenreLangCard/GenreLangCard";
import {ALL_GENRES, GENRE_COUNTERS} from '../../../Util.js';
import {formatArrayBy} from "../../../Util";

const genres = props => {
    
    const {
        goToSpecificGenre
    } = props;

    // formatting array so that top rated and trending always be at the end
    formatArrayBy(ALL_GENRES, 'Top-Rated', 'Trending');

    return(
        <section className={`db-section`}>
            <div className={'db-section-wrapper'}>
                <div className={'db-section-header'}>
                    <h1 className={'db-section-title'}>Genres</h1>
                </div>
                <div className={`db-card-wrapper`}>
                    {ALL_GENRES.map((item, index) => {
                        return(
                            <GenreLangCard
                                onClick={goToSpecificGenre.bind(this, item)}
                                key={index}
                                iconClass={`${item.toLowerCase()}`}
                                label={item}
                                counter={GENRE_COUNTERS[item]}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default genres;