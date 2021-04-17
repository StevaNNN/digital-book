import React, {Component} from 'react';
import BookCard from "../../Components/BookCard/BookCard";

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
        if(prevProps.books !== this.props.books) {
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
        const { arrayOfBooks } = this.state;
        let renderBooks = arrayOfBooks && arrayOfBooks.map((book, index) => {
            return(
                <BookCard
                    key={index}
                    alt={book.title}
                    genres={book.genres}
                    src={book.thumbnail}
                    onClick={this.onBookClick}
                />
            )
        });

        return (
            <div className={'db-book-card'}>
                {renderBooks}
            </div>
        );
    }
}

export default DynamicPage;
