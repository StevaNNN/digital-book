import React, {Component} from 'react';
import {genrePicker, langPicker, collectByTerm} from '../../Util';
import BookCard from "../../Components/BookCard/BookCard";
import classes from "./AbstractPage.module.scss";

class AbstractPage extends Component {

    state = {
        term: '',
        books: []
    }

    componentDidMount() {
        const searchParam = new URLSearchParams(this.props.location.search);
        for (let param of searchParam.entries()) {
            if(this.props.genre) {
                this.setState({
                    term: param[1],
                    books: genrePicker(param[1])
                })
            } else if (this.props.lang) {
                this.setState({
                    term: param[1],
                    books: langPicker(param[1])
                })
            } else  {
                this.setState({
                    term: param[1],
                    books: collectByTerm(param[1])
                })
            }
        }
    }

    // Collecting selected book and pass it the to parent
    onBookSubmit = (book) => this.props.selectedBook(book);
    onBookClick = (book) => this.props.selectedBook(book);

    render() {

        const {
            books
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
                {booksRender}
            </section>
        );
    }
}

export default AbstractPage;