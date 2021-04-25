import data from "./data.json";

export let ALL_GENRES = [];
export let ALl_LANGUAGES = [];
export let ALL_TITLES = [];
export let LANG_COUNTERS = {};
export let GENRE_COUNTERS = {};

export const genrePicker = (genre) => {
    let tempArr = [];
    data.books.forEach(book => {
        if(book.genres.includes(genre)) {
            tempArr.push(book)
        }
    })
    return tempArr;
}
export const langPicker = (lang) => {
    let tempArr = [];
    data.books.forEach(book => {
        if(book.language.includes(lang)) {
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
export const collectByTerm = (term) => {
    let tempArr = [];

    data.books.forEach(book => {
        const bookObjKeys = Object.keys(book);

        bookObjKeys.forEach(key => {
            switch(key) {
                case 'title':
                    return book[key].includes(term) ? tempArr.push(book) : null;
                case 'author':
                    return book[key].includes(term) ? tempArr.push(book) : null;
                case 'genres':
                    return book[key].filter(item => item.includes(term) ? tempArr.push(book) : null);
                case 'language':
                    return book[key].filter(item => item.includes(term) ? tempArr.push(book) : null);
                default:
            }
        })
    });

    return uniqueArray(tempArr);
}
export const uniqueArray = (array) => {
    let newArray = [];
    let arrayLength = array.length;
    let current;

    // while there is array length
    while (arrayLength) {
        // decrement
        arrayLength--;
        // store current record from passed array
        current = array[arrayLength];
        // while looping through array records current record is not contained in newArray so push that one to new array
        // since the indexOf is applied only on FIRST of duplicates it will always return -1 for that first unique record and
        // we store that one to the new array uncomment below to see log in console
        // console.log(newArray.indexOf(current))
        if (newArray.indexOf(current) === -1) {
            newArray.push(current);
        }
    }
    return newArray;
}
export const formatArrayBy = (arr, ...args) => {
    for (let i = 0; i < args.length; i++) {
        arr.push(arr.splice(arr.indexOf(args[i]), 1)[0]);
    }
}
const counterHelper = () => {
    let genreCounters = {
        "Young-Adult": 0,
        Fiction: 0,
        Romance: 0,
        Mystery: 0,
        Children: 0,
        History: 0,
        Horror: 0,
        Fantasy: 0,
        Classics: 0,
        SciFi: 0,
        "Top-Rated": 0,
        Trending: 0
    }

    let langCounters = {
        english: 0,
        dutch: 0,
        chinese: 0,
        french: 0,
        german: 0,
        italian: 0,
        spanish: 0,
        portuguese: 0,
        russian: 0,
        japanese: 0,
        greek: 0,
        latin: 0
    }

    data.books.forEach(book => {
       book.language.map(lang => {
           switch (lang) {
               case 'English':
                   return langCounters.english = langCounters.english + 1
               case 'Dutch':
                   return langCounters.dutch = langCounters.dutch + 1
               case 'Chinese':
                   return langCounters.chinese = langCounters.chinese + 1
               case 'French':
                   return langCounters.french = langCounters.french + 1
               case 'German':
                   return langCounters.german = langCounters.german + 1
               case 'Italian':
                   return langCounters.italian = langCounters.italian + 1
               case 'Spanish':
                   return langCounters.spanish = langCounters.spanish + 1
               case 'Portuguese':
                   return langCounters.portuguese = langCounters.portuguese + 1
               case 'Russian':
                   return langCounters.russian = langCounters.russian + 1
               case 'Japanese':
                   return langCounters.japanese = langCounters.japanese + 1
               case 'Greek':
                   return langCounters.greek = langCounters.greek + 1
               case 'Latin':
                   return langCounters.latin = langCounters.latin + 1
               default:
                   break;
           }
           return LANG_COUNTERS = langCounters;
       });
        book.genres.map(genre => {
            switch (genre) {
                case 'Top-Rated':
                    return genreCounters["Top-Rated"] = genreCounters["Top-Rated"] + 1
                case 'Trending':
                    return genreCounters.Trending = genreCounters.Trending + 1
                case 'SciFi':
                    return genreCounters.SciFi = genreCounters.SciFi + 1
                case 'Classics':
                    return genreCounters.Classics = genreCounters.Classics + 1
                case 'Fantasy':
                    return genreCounters.Fantasy = genreCounters.Fantasy + 1
                case 'Horror':
                    return genreCounters.Horror = genreCounters.Horror + 1
                case 'History':
                    return genreCounters.History = genreCounters.History + 1
                case 'Children':
                    return genreCounters.Children = genreCounters.Children + 1
                case 'Mystery':
                    return genreCounters.Mystery = genreCounters.Mystery + 1
                case 'Romance':
                    return genreCounters.Romance = genreCounters.Romance + 1
                case 'Fiction':
                    return genreCounters.Fiction = genreCounters.Fiction + 1
                case 'Young-Adult':
                    return genreCounters["Young-Adult"] = genreCounters["Young-Adult"] + 1
                default:
                    break;
            }
            return GENRE_COUNTERS = genreCounters;
        })
    });
}

collectAllGenres();
collectAllLangs();
collectAllTitles();
counterHelper();