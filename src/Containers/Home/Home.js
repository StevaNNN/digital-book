import React, {Component} from 'react';
import Hero from "../../Pages/Home/Hero/Hero";
import TopRated from "../../Pages/Home/TopRated/TopRated";
import Trending from "../../Pages/Home/Trending/Trending";
import Genres from "../../Pages/Home/Genres/Genres";
import Languages from "../../Pages/Home/Languages/Languages";
import Dialog from "../../Components/UI/Dialog/Dialog";
import WhatPeopleSay from "../../Pages/Home/WhatPeopleSay/WhatPeopleSay";
import BookInDialog from '../../Shared/BookInDialog/BookInDialog';
import data from '../../data.json';

class Home extends Component {

    state = {
        modalOpened: false,
        selectedBook: {},
        specificGenreBooks: [],
        specificLangBooks: [],
        searchedTerm: '',
        searchedBook: {}
    }

    changeToTopRated = () => this.props.history.push('/top-rated');
    changeToTrending = () => this.props.history.push('/trending');
    changeToGenre = (item) => this.props.history.push({pathname: '/genre', search: '?=' + item });
    changeToLang = (item) => this.props.history.push({pathname: '/language', search: '?=' + item});
    changeToBook = () => this.props.history.push({pathname: '/book', search: '?=' + this.state.searchedBook.title});
    onSearchBtnClick = (term) => term && this.props.history.push({pathname: '/book', search: '?=' + term});

    topRatedBookClicked = index => {
        const {topRatedBooks} = this.props;
        this.setState({
            selectedBook: topRatedBooks[index],
            modalOpened: true
        })
    }

    trendingBookClicked = index => {
        const {trendingBooks} = this.props;
        this.setState({
            selectedBook: trendingBooks[index],
            modalOpened: true
        })
    }

    closeModal = () => this.setState({modalOpened: false});


    onSearchTerm = event => {
        this.setState({
            searchedTerm: event.target.value
        })
    }

    onRecordClick = title => {
        data.books.forEach(book => {
            if(book.title === title)  {
                this.setState({
                    searchedBook: book
                }, this.changeToBook)
            }
        })
    }

    render() {
        const {
            modalOpened,
            selectedBook,
            searchedTerm,
            searchedBook
        } = this.state;

        const {
            topRatedBooks,
            trendingBooks
        } = this.props

        return (
            <>
                <Hero 
                    searchedTerm={searchedTerm}
                    searchedBook={searchedBook}
                    onSearchBtnClick={() => this.onSearchBtnClick(searchedTerm)}
                    onRecordClick={this.onRecordClick}
                    onSearchTerm={this.onSearchTerm}
                />
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
