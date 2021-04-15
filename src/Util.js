import data from "./data.json";
export const ALL_GENRES = [];
export const ALl_LANGUAGES = [];
export const ALL_TITLES = [];

export const genrePicker = (genre) => {
    let topRatedBooksArray = [];
    data.books.forEach(book => {
        if(book.genres.includes(genre)) {
            topRatedBooksArray.push(book)
        }
    })
    return topRatedBooksArray;
}

const collectAllGenres = () => {
    data.books.forEach(book => {
        book.genres.forEach(genre => {
            if(!ALL_GENRES.includes(genre)) {
                ALL_GENRES.push(genre)
            }
        });
    });
}

const collectAllLangs = () => {
    data.books.forEach(book => {
        book.language.forEach(genre => {
            if(!ALl_LANGUAGES.includes(genre)) {
                ALl_LANGUAGES.push(genre)
            }
        });
    });
}

const collectAllTitles = () => {
    data.books.forEach(book => {
        if(!ALL_TITLES.includes(book.title)) {
            ALL_TITLES.push(book.title)
        }
    });
}

collectAllGenres();
collectAllLangs();
collectAllTitles();

export const formatArrayBy = (arr, ...args) => {
    for (let i = 0; i < args.length; i++) {
        arr.push(arr.splice(arr.indexOf(args[i]), 1)[0]);
    }
}