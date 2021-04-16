import React from 'react';
import BookCard from "../../Components/BookCard/BookCard";
import data from '../../data.json'
class DynamicPage extends React.Component{

    state = {
        arrayOfBooks: data.books,
        selectedBook: {}
    }

    onBookClick = (book) => {
        this.setState({
            selectedBook: book
        })
    }

    render() {

        let renderBooks = this.state.arrayOfBooks.map(book => {
            return(
                <BookCard
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
