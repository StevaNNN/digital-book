import data from "./data.json";
export let ALL_GENRES = [];
export let ALl_LANGUAGES = [];
export let ALL_TITLES = [];

export const genrePicker = (genre) => {
    let tempArr = [];
    data.books.forEach(book => {
        if(book.genres.includes(genre)) {
            tempArr.push(book)
        }
    })
    return tempArr;
}

const collectAllGenres = () => {
    let books = data.books;
    let genresThatMather  = [];

    books.forEach(book => {
        book.genres.forEach(genre => {
            if(!ALL_GENRES.includes(genre)) {
                switch (genre) {
                    case 'Young-Adult':
                        return genresThatMather.push(genre)
                    case 'Romance':
                        return genresThatMather.push(genre)
                    case 'Mystery':
                        return genresThatMather.push(genre)
                    case "Children":
                        return genresThatMather.push(genre)
                    case 'History':
                        return genresThatMather.push(genre)
                    case 'Horror':
                        return genresThatMather.push(genre)
                    case 'Fantasy':
                        return genresThatMather.push(genre)
                    case 'Fiction':
                        return genresThatMather.push(genre)
                    case 'Classics':
                        return genresThatMather.push(genre)
                    case 'SciFi':
                        return genresThatMather.push(genre)
                    case 'Top-Rated':
                        return genresThatMather.push(genre)
                    case 'Trending':
                        return genresThatMather.push(genre)
                    default:
                        break;
                }
                ALL_GENRES = genresThatMather;
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