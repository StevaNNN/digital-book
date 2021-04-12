import React from 'react';
import Intro from "./Intro/Intro";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
import Genres from "./Genres/Genres";
import Languages from "./Languages/Languages";


const home = props => {
    const changeToTopRated = () => props.history.push('/top-rated');
    const changeToTrending = () => props.history.push('/trending');
    return(
        <>
            <Intro/>
            <TopRated bookClicked={changeToTopRated}/>
            <Trending bookClicked={changeToTrending}/>
            <Genres/>
            <Languages/>
        </>
    )
}

export default home;