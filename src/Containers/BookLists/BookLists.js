import React, {Component} from 'react';
import BookCard from "../../Components/BookCard/BookCard";
import classes from './BookLists.module.scss';

class DynamicPage extends Component{

    state = {
        arrayOfBooks: []
    }
    // Collecting all books from props to state
    componentDidMount() {
        this.setState({
            arrayOfBooks: this.props.books
        })
    }

    // Reset state of component if previous props(books) are not the same as the currently ones
    // basicly reset the state after page refresh!
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.setState({
                arrayOfBooks: this.props.books
            })
        }
    }
    // Collecting selected book and pass it the to parent
    onBookSubmit = (book) => this.props.selectedBook(book);
    onBookClick = (book) => this.props.selectedBook(book);

    render() {
        
        const {
            arrayOfBooks
        } = this.state;

        const {
            genre,
            languages
        } = this.props;

        let formatedPageTitle;
        let bookClasses = [classes.Book];

        let renderBooks = arrayOfBooks && arrayOfBooks.map((book, index) => {
            return(
                <BookCard
                    key={index}
                    alt={book.title}
                    genres={book.genres}
                    author={book.author}
                    title={book.title}
                    src={book.thumbnail}
                    submitLabel={"Proceed"}
                    onClick={this.onBookClick.bind(this, book)}
                    onSubmit={this.onBookSubmit.bind(this, book)}
                />
            );
        });

        if(this.props.match.path !== '/genres') {
            formatedPageTitle = this.props.match.path.substring(1).toUpperCase() + ' BOOKS';
        } else {
            formatedPageTitle = 'BOOKS BY ' + this.props.match.path.substring(1).toUpperCase();
        }
        // This renders is responsible for presenting books on Trending and Top-Rated pages
        let render = <>
            <h1>{formatedPageTitle}</h1>
            <section className={`db-section ${classes.Book}`}>
                <div className={`db-section-wrapper`}>
                    {renderBooks}
                </div>
            </section>
        </>;

        // This condition is responsible for overriding above render only on Genres and Languages Pages
        if(genre || languages) {
            // setting addition class on genres and languages pages which will be responsible
            // for flagging that last item should be not presented to the user
            // since that last record in array is concat to the each array flagging the specific genre or language
            bookClasses = [...bookClasses, classes.RemoveLastOne];

            render = arrayOfBooks && arrayOfBooks.map((booksInnerArray, index) => {
                return (
                    <section className={classes.Row} key={index}>
                        {/* Extracting always the last record of each array which holds Genre/Language Label*/}
                        <h1>{booksInnerArray[booksInnerArray.length - 1]}</h1>
                        <div className={classes.BooksWrap}>
                            {booksInnerArray.map((book, index) => {
                                return (
                                    <div
                                        className={bookClasses.join(' ')}
                                        key={index}
                                    >
                                        <BookCard
                                            alt={book.title}
                                            genres={book.genres}
                                            submitLabel={"Proceed"}
                                            author={book.author}
                                            title={book.title}
                                            src={book.thumbnail}
                                            onClick={this.onBookClick.bind(this, book)}
                                            onSubmit={this.onBookSubmit.bind(this, book)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )
            });
        }
        return <>{render}</>;
    }
}

export default DynamicPage;
