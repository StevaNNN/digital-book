import React from 'react';
// import classes from './Genres.module.scss';
import GenreLangCard from "../../../Components/GenreLangCard/GenreLangCard";
import {ALL_GENRES} from '../../../Util.js';
import {formatArrayBy} from "../../../Util";

const genres = React.forwardRef((props, ref) => {
    const {goToSpecificGenre} = props;
    const genresThatMather = [];

    ALL_GENRES.forEach(genre => {
        switch (genre) {
            case 'Young-Adult':
                return genresThatMather.push(genre)
            case 'Romance':
                return genresThatMather.push(genre)
            case 'Mystery':
                return genresThatMather.push(genre)
            case "Children":
                return genresThatMather.push(genre)
            case 'History':
                return genresThatMather.push(genre)
            case 'Horror':
                return genresThatMather.push(genre)
            case 'Fantasy':
                return genresThatMather.push(genre)
            case 'Fiction':
                return genresThatMather.push(genre)
            case 'Classics':
                return genresThatMather.push(genre)
            case 'SciFi':
                return genresThatMather.push(genre)
            case 'Top-Rated':
                return genresThatMather.push(genre)
            case 'Trending':
                return genresThatMather.push(genre)
            default:
                break;
        }
    });
    // formatting array so that top rated and trending always be at the end
    formatArrayBy(genresThatMather, 'Top-Rated', 'Trending');

    return(
        <section className={`db-section`}>
            <div className={'db-section-wrapper'}>
                <div className={'db-section-header'}>
                    <h1>Genres</h1>
                </div>
                <div className={`db-card-wrapper`}>
                    {genresThatMather.map((item, index) => {
                        return(
                            <GenreLangCard
                                onClick={goToSpecificGenre.bind(this, item)}
                                key={index}
                                iconClass={`${item.toLowerCase()}`}
                                label={item}
                                counter={1}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
});

export default genres;