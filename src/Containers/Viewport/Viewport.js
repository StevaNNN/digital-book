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
import { motion, AnimatePresence } from "framer-motion";

class Viewport extends React.Component {

    state = {
        // Global toggles booleans
        backDropActive: false,
        modalOpened: false,
        pageLoaded: 1,

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

        window.addEventListener('scroll', this.onScrollChange);
        window.addEventListener('load', this.onPageLoad);
        // window.addEventListener('beforeunload', this.onBeforeUnload);
    }
    // closing dialog on on hardware back button on mobile devices and scrolling to top on route change
    // adding classes when dialog is opened to html tag
    componentDidUpdate(prevProps, prevState) {
        let htmlDomObject = document.getElementsByTagName('html')[0];
        let trt = document.querySelectorAll('.db-section');
        trt.forEach((kec) => {
            setTimeout(() => {
                kec.classList.add('visible');
            }, 300)
        })
        // setTimeout(function () { trt.classList.add('visible');}, 300)
        if(prevProps !== this.props) {
            this.closeModal();
            this.scrollToTop();
        }

        if(prevState !== this.state) {
            this.state.modalOpened ? htmlDomObject.classList.add('no-scroll') : htmlDomObject.classList.remove('no-scroll');
        }
    }
    // removing event listeners
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollChange);
        window.removeEventListener('load', this.onPageLoad);
        // window.removeEventListener('beforeunload', this.onBeforeUnload);
    }
    // on refresh scroll page to top
    onPageLoad = (event) => window.scrollTo({top: 0, behavior: "smooth"});
    // on refresh
    onBeforeUnload = () => {
        // let trt = document.getElementsByClassName('db-section');
        // console.log(trt)
        // // trt.forEach((kec) => {
        // //     kec.classList.add('visible');
        // // })
    }
    // onScrollChange method
    onScrollChange = (event) => {
        // const windowScrollPosition = window.scrollY;
        // const windowScrolledFromTop = window.pageYOffset;
        // console.log(event)
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
    onBookClick = (book) => {
        this.setState({
            selectedBook: book,
            modalOpened: true
        });
    };
    // Closing Modal
    closeModal = () => {
        this.setState({
            modalOpened: false
        });
    };
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
    // scroll to top helper method
    scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"});

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
            <AnimatePresence>
                <motion.div
                    initial={{opacity: 0}}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
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
                </motion.div>
            </AnimatePresence>
            // <>
            //     <Header clicked={this.toggleBackdrop} />
            //     <SideDrawer
            //         opened={backDropActive}
            //         backDropUp={backDropActive}
            //         backDropClicked={this.toggleBackdrop}
            //         onCloseSideBarClick={this.toggleBackdrop}
            //     />
            //     <main style={{marginTop: '80px'}}>
            //         <Switch>
            //             <Route
            //                 path={'/top-rated'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <TopRated
            //                             {...routeProps}
            //                             books={topRatedBooks}
            //                             selectedBook={this.onBookClick}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/trending'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <Trending
            //                             {...routeProps}
            //                             books={trendingBooks}
            //                             selectedBook={this.onBookClick}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/genres'}
            //                 exact
            //                 render={(routeProps) => {
            //                     return(
            //                         <Genres
            //                             {...routeProps}
            //                             books={booksByGenre}
            //                             selectedBook={this.onBookClick}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/languages'}
            //                 render={(routeProps)=> {
            //                     return(
            //                         <Languages
            //                             {...routeProps}
            //                             selectedBook={this.onBookClick}
            //                             books={booksByLanguage}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/about'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <About {...routeProps} />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/book'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <AbstractPage
            //                             {...routeProps}
            //                             selectedBook={this.onBookClick}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/genre'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <AbstractPage
            //                             {...routeProps}
            //                             selectedBook={this.onBookClick}
            //                             genre
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={'/language'}
            //                 render={(routeProps) => {
            //                     return(
            //                         <AbstractPage
            //                             {...routeProps}
            //                             selectedBook={this.onBookClick}
            //                         />
            //                     )
            //                 }}
            //             />
            //             <Route
            //                 path={"/"}
            //                 render={(routeProps) => {
            //                     return(
            //                         <Home
            //                             {...routeProps}
            //                             topRatedBookClicked={this.topRatedBookClicked}
            //                             trendingBookClicked={this.trendingBookClicked}
            //                             topRatedBooks={topRatedBooks}
            //                             trendingBooks={trendingBooks}
            //                         />
            //                     )
            //                 }}
            //             />
            //         </Switch>
            //     </main>
            //     <Footer />
            //     <Dialog
            //         title={"Book summary"}
            //         close={this.closeModal}
            //         onSubmit={this.closeModal}
            //         open={modalOpened}
            //         footerActionLabel="Close"
            //     >
            //         <BookInDialog
            //             title={selectedBook.title}
            //             author={selectedBook.author}
            //             thumbnail={selectedBook.thumbnail}
            //             description={selectedBook.description}
            //             link={selectedBook.link}
            //         />
            //     </Dialog>
            // </>
        );
    }
}

export default withRouter(Viewport);
