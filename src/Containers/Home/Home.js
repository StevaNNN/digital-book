import React, {Component} from 'react';
import Hero from "../Hero/Hero";
import TopRated from "../../Pages/Home/TopRated/TopRated";
import Trending from "../../Pages/Home/Trending/Trending";
import Genres from "../../Pages/Home/Genres/Genres";
import Languages from "../../Pages/Home/Languages/Languages";
import Dialog from "../../Components/UI/Dialog/Dialog";
import WhatPeopleSay from "../../Pages/Home/WhatPeopleSay/WhatPeopleSay";

class Home extends Component {

    state = {
        modalOpened: false,
        selectedBook: {}
    }

    changeToTopRated = () => this.props.history.push('/top-rated');
    changeToTrending = () => this.props.history.push('/trending');
    changeToGenre = (item) => this.props.history.push('/' + item.toLowerCase())
    changeToLang = (item) => this.props.history.push('/' + item.toLowerCase())

    topRatedBookClicked = (index) => {
        const {topRatedBooks} = this.props;
        this.setState({
            selectedBook: topRatedBooks[index],
            modalOpened: true
        })
    }

    trendingBookClicked = (index) => {
        const {trendingBooks} = this.props;
        this.setState({
            selectedBook: trendingBooks[index],
            modalOpened: true
        })
    }

    closeModal = () => this.setState({modalOpened: false});


    render() {
        const {
            modalOpened,
            selectedBook
        } = this.state;

        const {
            topRatedBooks,
            trendingBooks
        } = this.props

        return (
            <>
                <Hero />
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
                    <a
                        style={{padding: '10px', background: 'purple',borderRaidus: '16px'}}
                        href={"/"}
                        aria-label={'trt'}
                    >
                        Buy
                    </a>
                </Dialog>
            </>
        );
    }
}

export default Home;
