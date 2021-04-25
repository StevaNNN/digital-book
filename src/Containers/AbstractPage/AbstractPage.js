import React, {Component} from 'react';
import {genrePicker, langPicker, collectByTerm} from '../../Util';
import BookCard from "../../Components/BookCard/BookCard";
import classes from "./AbstractPage.module.scss";

class AbstractPage extends Component {

    state = {
        term: '',
        books: [],
        textBySearchedTerm: ''
    }

    componentDidMount() {
        const searchParam = new URLSearchParams(this.props.location.search);
        for (let param of searchParam.entries()) {
            if(this.props.genre) {
                this.setState({
                    term: param[1],
                    books: genrePicker(param[1]),
                    textBySearchedTerm: param[1]
                })
            } else if (this.props.lang) {
                this.setState({
                    term: param[1],
                    books: langPicker(param[1]),
                    textBySearchedTerm: param[1]
                })
            } else  {
                this.setState({
                    term: param[1],
                    books: collectByTerm(param[1]),
                    textBySearchedTerm: param[1]
                })
            }
        }
    }

    // Collecting selected book and pass it the to parent
    onBookSubmit = (book) => this.props.selectedBook(book);
    onBookClick = (book) => this.props.selectedBook(book);

    render() {

        const {
            books,
            textBySearchedTerm
        } = this.state;

        let booksRender = books.length > 0 ? books.map((book, index) => {
            return(
                <BookCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    src={book.thumbnail}
                    alt={book.title}
                    onPage
                    genres={book.genres}
                    submitLabel={"Proceed"}
                    onClick={this.onBookClick.bind(this, book)}
                    onSubmit={this.onBookSubmit.bind(this, book)}
                />
            )
        }) : <div>No books found by searched term</div>;

        return (
            <section className={`db-section ${classes.BooksOnPage}`}>
                <div className={`db-section-header db-header-centered`}>
                    <h1 className={`db-section-title`}>Books by searched term : <i className={'db-text-color'}>"{textBySearchedTerm}"</i></h1>
                </div>
                <div className={`db-section-content`}>
                    {booksRender}
                </div>
            </section>
        );
    }
}

export default AbstractPage;