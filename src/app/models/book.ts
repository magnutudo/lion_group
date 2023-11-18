import {Author} from "./author";

export class Book {
  id: number;
  author: Author;
  title: string;
  publisher: string;
  year: number;
  constructor(id,author,title,publisher,year) {
    this.id = id
    this.author = author
    this.title = title
    this.publisher = publisher
    this.year = year
  }
}
