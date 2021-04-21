import React, {Component} from 'react';
import Hero from "../../Pages/Home/Hero/Hero";
import TopRated from "../../Pages/Home/TopRated/TopRated";
import Trending from "../../Pages/Home/Trending/Trending";
import Genres from "../../Pages/Home/Genres/Genres";
import Languages from "../../Pages/Home/Languages/Languages";
import WhatPeopleSay from "../../Pages/Home/WhatPeopleSay/WhatPeopleSay";
import data from '../../data.json';

class Home extends Component {

    state = {
        searchedTerm: '',
        searchedBook: {}
    }
    // Adding event listener
    componentDidMount() {
        document.addEventListener('click', this.onSearchBlurClearState);
    }
    // Removing event listener when component will unmount
    componentWillUnmount() {
        document.removeEventListener('click', this.onSearchBlurClearState);
    }
    // Change the url to /top-rated
    changeToTopRated = () => this.props.history.push('/top-rated');
    // Change the url to /trending
    changeToTrending = () => this.props.history.push('/trending');
    // Change the url to specific genre
    changeToGenre = (item) => this.props.history.push({pathname: '/genre', search: '?=' + item });
    // Change the url to specific language
    changeToLang = (item) => this.props.history.push({pathname: '/language', search: '?=' + item});
    // Change the url to specific book picked from search input dropdown
    changeToBook = () => this.props.history.push({pathname: '/book', search: '?=' + this.state.searchedBook.title});
    // Change the url to what ever user typed in search input
    onSearchBtnClick = (term) => term && this.props.history.push({pathname: '/book', search: '?=' + term});
    // The method which is responsible for closing dropdown if the user clicked outside of that area
    onSearchBlurClearState = (event) => {
        // fetching the element which should not trigger reseting state
        const element = document.getElementById('trt');
        // if currently clicked element is not element fetched above
        // and if element does not contain currently targeted element
        if(event.target !== element && !element.contains(event.target)) {
            this.setState({
                searchedTerm: ''
            })
        }
    }

    topRatedBookClicked = index => this.props.topRatedBookClicked(index);
    trendingBookClicked = index => this.props.trendingBookClicked(index);


    // Binding what user typed to the state
    onSearchTerm = event => {
        this.setState({
            searchedTerm: event.target.value
        })
    }
    // Method responsible for updating state on searched dropdown record click
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
            </>
        );
    }
}

export default Home;
