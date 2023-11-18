import {Observable, of} from "rxjs";
import {Author} from "../models/author";
import {Data} from "../dataSet/data";
import {Books} from "../models/books";


export class DataService {
    getAllAuthors(): Observable<Author[]> {
        let sourtedAuthors = Data.authors.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
        return of(sourtedAuthors)
    }

    getAllBooks(): Observable<Books[]> {
        return of(Data.books)
    }

    postItem(author: Author) {
        if (this.compareAuthors(author)) {
            Data.authors.push(author)
            localStorage.setItem("authors", JSON.stringify(Data.authors))
        } else {
            return
        }
    }

    getAuthorsFromLocalStorage(): Author[] {
        return JSON.parse(localStorage.getItem("authors"))
    }

    compareAuthors(author: Author): boolean {
        for (const existingAuthor of Data.authors) {
            if (
                existingAuthor.firstName === author.firstName &&
                existingAuthor.lastName === author.lastName &&
                existingAuthor.middleName === author.middleName &&
                existingAuthor.dateOfBirth.getTime() === author.dateOfBirth.getTime()
            ) {
                return false;
            }
        }
        return true;
    }
}
