import React, {Component} from 'react';
import Hero from "../Hero/Hero";
import TopRated from "../../Pages/Home/TopRated/TopRated";
import Trending from "../../Pages/Home/Trending/Trending";
import Genres from "../../Pages/Home/Genres/Genres";
import Languages from "../../Pages/Home/Languages/Languages";
import Dialog from "../../Components/UI/Dialog/Dialog";
import WhatPeopleSay from "../../Pages/Home/WhatPeopleSay/WhatPeopleSay";
import BookInDialog from '../../Shared/BookInDialog/BookInDialog';

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
                    <BookInDialog
                        title={selectedBook.title}
                        author={selectedBook.author}
                        thumbnail={selectedBook.thumbnail}
                        description={selectedBook.description}
                        link={selectedBook.link}
                    />
                </Dialog>
            </>
        );
    }
}

export default Home;
