import data from "./data.json";

export const genrePicker = (genre) => {
    let topRatedBooksArray = [];
    data.books.forEach(book => {
        if(book.genres.includes(genre)) {
            topRatedBooksArray.push(book)
        }
    })
    return topRatedBooksArray;
}