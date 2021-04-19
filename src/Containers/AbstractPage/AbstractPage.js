import React from 'react';
import {genrePicker, langPicker, collectByTerm} from '../../Util';
import data from "../../data.json";

class AbstractPage extends React.Component {
    state = {
        term: '',
        booksByGenre: [],
        booksByLang: [],
        booksBySearchedTerm: []
    }

    componentDidMount() {
        const searchParam = new URLSearchParams(this.props.location.search);
        for (let param of searchParam.entries()) {
            this.setState({
                term: param[1],
                booksByGenre: genrePicker(param[1]),
                booksByLang: langPicker(param[1]),
                booksBySearchedTerm: collectByTerm(param[1])
            })
        }
    }

    render() {
        const { 
            genre,
            book
        } = this.props;

        const {
            booksByGenre,
            booksByLang,
            booksBySearchedTerm
        } = this.state;

        let arrayOfBooks;

        if (genre && !book) {
            arrayOfBooks = booksByGenre.map((book, index) => <div key={index}>{book.title}</div>)
        } else if(book) {
            arrayOfBooks = booksBySearchedTerm.map((book, index) => <div key={index}>{book.title}</div>)
        } else {
            arrayOfBooks = booksByLang.map((book, index) => <div key={index}>{book.title}</div>)
        }

        return (
            <div>
               {arrayOfBooks}
            </div>
        );
    }
};

export default AbstractPage;