import React, {Component} from 'react';
import BookCard from "../../Components/BookCard/BookCard";
import classes from './DynamicPage.module.scss';

class DynamicPage extends Component{

    state = {
        arrayOfBooks: [],
        selectedBook: {}
    }


    componentDidMount() {
        this.setState({
            arrayOfBooks: this.props.books
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.setState({
                arrayOfBooks: this.props.books
            })
        }
    }


    onBookClick = (book) => {
        this.setState({
            selectedBook: book
        })
    }

    render() {
        const {arrayOfBooks} = this.state;
        const {extra} = this.props;

        let formatedPageTitle;
        if(this.props.match.path !== '/genres') {
            formatedPageTitle = this.props.match.path.substring(1).toUpperCase() + ' BOOKS';
        } else {
            formatedPageTitle = 'BOOKS BY ' + this.props.match.path.substring(1).toUpperCase();
        }

        let renderBooks = arrayOfBooks && arrayOfBooks.map((book, index) => {
            return(
                <BookCard
                    key={index}
                    alt={book.title}
                    genres={book.genres}
                    src={book.thumbnail}
                    onClick={this.onBookClick}
                />
            );
        });

        let renderBooksByGenre = arrayOfBooks && extra && arrayOfBooks.map((bookGenre, index) => {
            return (
                <div className={classes.Row} key={index}>
                    <h1>{bookGenre[bookGenre.length - 1]}</h1>
                    <div className={classes.BooksWrap}>
                        {bookGenre.map((book, index) => {
                            return (
                                <div
                                    className={classes.Book}
                                    key={index}
                                >
                                    <BookCard
                                        alt={book.title}
                                        genres={book.genres}
                                        src={book.thumbnail}
                                        onClick={this.onBookClick}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        });

        return (
            <div>
                {extra ?
                    <>
                        <h1>{formatedPageTitle}</h1>
                        {renderBooksByGenre}
                    </>
                    :
                    <>
                        <h1>{formatedPageTitle}</h1>
                        <div className={classes.Book}>
                            {renderBooks}
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default DynamicPage;
