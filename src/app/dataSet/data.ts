import {Author} from "../models/author";
import {Book} from "../models/book";

export class Data {
    static authors: Author[] = [
        {id: 1, firstName: "Игорь", lastName: "Прокопенко", middleName: "Павлович", dateOfBirth: new Date(1973, 1, 23)},
        {id: 2, firstName: "Гена", lastName: "Прокопов", middleName: "Алексеевич", dateOfBirth: new Date(1929, 3, 11)},
        {id: 3, firstName: "Андрей", lastName: "Левин", middleName: "Александрович", dateOfBirth: new Date(1965, 6, 9)}
]


static
books:Book[] = [
    {id: 1, author: Data.authors[1], title: "Бульба", year: 2003, publisher: "СПБ"},
    {id: 2, author: Data.authors[0], title: "Тарас", year: 2008, publisher: "МСК"},
    {id: 3, author: Data.authors[2], title: "Жук", year: 1998, publisher: "ЕКБ"},
    {id: 4, author: Data.authors[2], title: "Лимон", year: 2002, publisher: "СПБ"},
    {id: 5, author: Data.authors[1], title: "Трамвай", year: 2005, publisher: "МСК"},
    {id: 6, author: Data.authors[0], title: "Линда", year: 2003, publisher: "ЕКБ"}
]
}
