import {Observable, of} from "rxjs";
import {Author} from "../models/author";
import {Data} from "../dataSet/data";
import {Books} from "../models/books";

export class DataService {
    getAllAuthors(): Observable<Author[]> {
        return of(Data.authors)
    }

    getAllBooks(): Observable<Books[]> {
        return of(Data.books)
    }
}
