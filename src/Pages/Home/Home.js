import React from 'react';
import Intro from "./Intro/Intro";
import TopRated from "./TopRated/TopRated";
import Trending from "./Trending/Trending";
import Genres from "./Genres/Genres";
import Languages from "./Languages/Languages";
import Dialog from "../../Components/UI/Dialog/Dialog";
import {genrePicker} from "../../Util";
import WhatPeopleSay from "./WhatPeopleSay/WhatPeopleSay";

class Home extends React.Component {
    genreRef;
    state = {
        modalOpened: false,
        selectedBook: {},
        trendingBooks: [],
        topRatedBooks: []
    }

    componentDidMount() {
        this.setState({
            trendingBooks: genrePicker('Trending'),
            topRatedBooks: genrePicker('Top-Rated')
        })
    }

    changeToTopRated = () => this.props.history.push('/top-rated');
    changeToTrending = () => this.props.history.push('/trending');
    changeToGenre = (item) => this.props.history.push('/' + item.toLowerCase())
    changeToLang = (item) => this.props.history.push('/' + item.toLowerCase())

    topRatedBookClicked = (index) => {
        this.setState({
            selectedBook: this.state.topRatedBooks[index],
            modalOpened: true
        })
    }

    trendingBookClicked = (index) => {
        this.setState({
            selectedBook: this.state.trendingBooks[index],
            modalOpened: true
        })
    }

    closeModal = () => this.setState({modalOpened: false});


    render() {
        const {
            topRatedBooks,
            trendingBooks,
            modalOpened,
            selectedBook
        } = this.state;

        console.log(this.genreRef)

        return (
            <>
                <Intro />
                <TopRated
                    topRatedBooks={topRatedBooks}
                    goToTopRatedPage={this.changeToTopRated}
                    bookClicked={this.topRatedBookClicked}
                />
                <Trending
                    trendingBooks={trendingBooks}
                    goToTrendingPage={this.changeToTrending}
                    bookClicked={this.trendingBookClicked}
                />
                <Genres
                    ref={(genre)=>this.genreRef = genre}
                    goToSpecificGenre={this.changeToGenre}
                />
                <Languages
                    goToSpecificLanguage={this.changeToLang}
                />
                <WhatPeopleSay />
                <Dialog
                    title={"Book summary"}
                    close={this.closeModal}
                    onSubmit={this.closeModal}
                    open={modalOpened}
                    footerActionLabel="Close"
                >
                    <p>{selectedBook.title}</p>
                    <p>{selectedBook.author}</p>
                    <p style={{maxWidth: '300px'}}>{selectedBook.description}</p>
                    <img style={{maxWidth: '300px', height: '300px'}} src={selectedBook.thumbnail} alt={selectedBook.title}/>
                    <a style={{padding: '10px', background: 'purple',borderRaidus: '16px'}} href={selectedBook.link} target="_blank">Buy</a>
                </Dialog>
            </>
        );
    }
}

export default Home;