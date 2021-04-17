import React from 'react';
import BookCard from "../../Components/BookCard/BookCard";


class DynamicPage extends React.Component{

    onBookClick = (book) => {
        this.setState({
            selectedBook: book
        })
    }

    render() {

        const { books } = this.props;

        let renderBooks = books.map(book => {
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
