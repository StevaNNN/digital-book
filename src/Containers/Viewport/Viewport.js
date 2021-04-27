import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {genrePicker, langPicker, ALL_GENRES, ALl_LANGUAGES} from "../../Util";
import Header from '../../Components/Navigation/Header/Header';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import AbstractPage from "../AbstractPage/AbstractPage";
import Home from '../Home/Home';
import TopRated from "../../Pages/TopRated/TopRated";
import Trending from "../../Pages/Trending/Trending";
import Genres from "../../Pages/Genres/Genres";
import Languages from "../../Pages/Languages/Languages";
import Footer from "../../Shared/Footer/Footer";
import About from "../../Pages/About/About";
import BookInDialog from "../../Shared/BookInDialog/BookInDialog";
import Dialog from "../../Components/UI/Dialog/Dialog";

class Viewport extends React.Component {

    state = {
        // Global toggles booleans
        backDropActive: false,
        modalOpened: false,

        //////////////////////////
        // Home page slider arrays
        trendingBooks: [],
        topRatedBooks: [],

        //////////////////////////
        // GENRE/LANGUAGE pages arrays
        booksByGenre: [],
        booksByLanguage: [],
        /////////////////////////

        // Currently selected book object
        selectedBook: {}
    }
    // Fetching all books by Trending genre
    // Fetching all books by Top-Rated genre
    componentDidMount() {
        this.setState({
            trendingBooks: genrePicker('Trending'),
            topRatedBooks: genrePicker('Top-Rated')
        });

        this.collectBooksByGenre();
        this.collectBooksByLang();
    }
    // Fetching all books by Genres
    collectBooksByGenre = () => {
        let arrayOfBookByGenre = [];

        ALL_GENRES.map(genre => {
            return arrayOfBookByGenre.push(genrePicker(genre).concat(genre));
        });
        this.setState({booksByGenre: arrayOfBookByGenre});
    }
    // Fetching all books by Languages
    collectBooksByLang = () => {
        let arrayOfBookByLangs = [];

        ALl_LANGUAGES.map(lang => {
            return arrayOfBookByLangs.push(langPicker(lang).concat(lang));
        });
        this.setState({booksByLanguage: arrayOfBookByLangs});
    }
    // Toggling backdrop visibility
    toggleBackdrop = () => {
        // we should use this way when comparing states because of async set of state
        this.setState( (prevState) => {
            return { backDropActive: !prevState.backDropActive }
        })
    }
    // Collect selected book from children components
    onBookClick = (book) => this.setState({selectedBook: book, modalOpened: true});
    // Closing Modal
    closeModal = () => this.setState({modalOpened: false});
    // Clicking on book from top-rated books slider on Home page
    // receive index which is responsible for flagging currently
    // clicked book in trending books slider
    topRatedBookClicked = index => {
        const {topRatedBooks} = this.state;
        this.setState({
            selectedBook: topRatedBooks[index],
            modalOpened: true
        })
    }
    // Clicking on book from trending books slider on Home page
    // receive index which is responsible for flagging currently
    // clicked book in trending books slider
    trendingBookClicked = index => {
        const {trendingBooks} = this.state;
        this.setState({
            selectedBook: trendingBooks[index],
            modalOpened: true
        })
    }
    // closing dialog on on hardware back button on mobile devices
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.closeModal();
        }
    }

    render() {

        const {
            modalOpened,
            selectedBook,
            backDropActive,
            topRatedBooks,
            trendingBooks,
            booksByGenre,
            booksByLanguage
        } = this.state;

        return(
            <>
                <Header clicked={this.toggleBackdrop} />
                <SideDrawer
                    opened={backDropActive}
                    backDropUp={backDropActive}
                    backDropClicked={this.toggleBackdrop}
                    onCloseSideBarClick={this.toggleBackdrop}
                />
                <main style={{marginTop: '80px'}}>
                    <Switch>
                        <Route
                            path={'/top-rated'}
                            render={(routeProps) => {
                                return(
                                    <TopRated
                                        {...routeProps}
                                        books={topRatedBooks}
                                        selectedBook={this.onBookClick}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/trending'}
                            render={(routeProps) => {
                                return(
                                    <Trending
                                        {...routeProps}
                                        books={trendingBooks}
                                        selectedBook={this.onBookClick}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/genres'}
                            exact
                            render={(routeProps) => {
                                return(
                                    <Genres
                                        {...routeProps}
                                        books={booksByGenre}
                                        selectedBook={this.onBookClick}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/languages'}
                            render={(routeProps)=> {
                                return(
                                    <Languages
                                        {...routeProps}
                                        selectedBook={this.onBookClick}
                                        books={booksByLanguage}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/about'}
                            render={(routeProps) => {
                                return(
                                    <About {...routeProps} />
                                )
                            }}
                        />
                        <Route
                            path={'/book'}
                            render={(routeProps) => {
                                return(
                                    <AbstractPage
                                        {...routeProps}
                                        selectedBook={this.onBookClick}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/genre'}
                            render={(routeProps) => {
                                return(
                                    <AbstractPage
                                        {...routeProps}
                                        selectedBook={this.onBookClick}
                                        genre
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/language'}
                            render={(routeProps) => {
                                return(
                                    <AbstractPage
                                        {...routeProps}
                                        selectedBook={this.onBookClick}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={"/"}
                            render={(routeProps) => {
                                return(
                                    <Home
                                        {...routeProps}
                                        topRatedBookClicked={this.topRatedBookClicked}
                                        trendingBookClicked={this.trendingBookClicked}
                                        topRatedBooks={topRatedBooks}
                                        trendingBooks={trendingBooks}
                                    />
                                )
                            }}
                        />
                    </Switch>
                </main>
                <Footer />
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

export default withRouter(Viewport);
