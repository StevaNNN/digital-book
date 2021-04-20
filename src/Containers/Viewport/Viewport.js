import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from '../../Components/Navigation/Header/Header';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import TopRated from "../../Pages/TopRated/TopRated";
import Home from '../Home/Home';
import Trending from "../../Pages/Trending/Trending";
import Genres from "../../Pages/Genres/Genres";
import Languages from "../../Pages/Languages/Languages";
import Footer from "../../Shared/Footer/Footer";
import About from "../../Pages/About/About";
import {genrePicker, langPicker, ALL_GENRES, ALl_LANGUAGES} from "../../Util";
import AbstractPage from "../AbstractPage/AbstractPage";

class Viewport extends React.Component {

    state = {
        backDropActive: false,
        scrollInto: '',
        trendingBooks: [],
        topRatedBooks: [],
        booksByGenre: [],
        booksByLanguage: []
    }

    componentDidMount() {
        this.setState({
            trendingBooks: genrePicker('Trending'),
            topRatedBooks: genrePicker('Top-Rated')
        });

        this.collectBooksByGenre();
        this.collectBooksByLang();
    }

    collectBooksByGenre = () => {
        let arrayOfBookByGenre = [];

        ALL_GENRES.map(genre => {
            return arrayOfBookByGenre.push(genrePicker(genre).concat(genre));
        });
        this.setState({booksByGenre: arrayOfBookByGenre});
    }

    collectBooksByLang = () => {
        let arrayOfBookByLangs = [];

        ALl_LANGUAGES.map(lang => {
            return arrayOfBookByLangs.push(langPicker(lang).concat(lang));
        });
        this.setState({booksByLanguage: arrayOfBookByLangs});
    }

    toggleBackdrop = () => {
        // we should use this way when comparing states because of async set of state
        this.setState( (prevState) => {
            return { backDropActive: !prevState.backDropActive }
        })
    }

    openBackdrop = () => this.setState({ backDropActive: true })

    render() {

        const {
            backDropActive,
            topRatedBooks,
            trendingBooks,
            booksByGenre,
            booksByLanguage
        } = this.state;

        return(
            <>
                <Header 
                clicked={this.openBackdrop}
                />
                <SideDrawer
                    opened={backDropActive}
                    backDropUp={backDropActive}
                    backDropClicked={this.toggleBackdrop}
                    onCloseSideBarClick={this.toggleBackdrop}
                />
                <main>
                    <Switch>
                        <Route
                            path={'/top-rated'}
                            render={(routeProps) => {
                                return(
                                    <TopRated
                                        {...routeProps}
                                        books={topRatedBooks}
                                    />
                                )
                            }}
                        />
                        <Route
                            path={'/book'}
                            render={(routeProps) => {
                                return(
                                    <AbstractPage
                                        {...routeProps}
                                        book
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
                            path={"/"}
                            render={(routeProps) => {
                                return(
                                    <Home
                                        {...routeProps}
                                        topRatedBooks={topRatedBooks}
                                        trendingBooks={trendingBooks}
                                    />
                                )
                            }}
                        />
                    </Switch>
                </main>
                <Footer />
            </>
        );
    }
}

export default Viewport;
