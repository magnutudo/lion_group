import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {Book} from "../../models/book";
import {MatDialog} from "@angular/material/dialog";
import {DataService} from "../../service/data.service";
import {MatSort} from "@angular/material/sort";
import {Author} from "../../models/author";
import {AddBookModalComponent} from "../../dialog/add-book-modal/add-book-modal.component";
import {Data} from "../../dataSet/data";


@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {
    dataSource: MatTableDataSource<Book>;
    displayedColumns: string[] = ['id', 'author', 'title', 'publisher', 'year']

    constructor(private dialog: MatDialog, private dataService: DataService) {
    }

    books: Book[]
    @ViewChild(MatSort, {static: false}) private sort: MatSort;

    ngOnInit() {
        this.dataSource = new MatTableDataSource()
        let localArr = JSON.parse(localStorage.getItem("books"))
        if (localStorage.getItem("books")) {
            this.dataSource.data = localArr
            this.dataSource.sortingDataAccessor = (item, colName) => {
                switch (colName) {
                    case 'author':
                        return item.author.lastName;
                    case 'title':
                        return item.title;
                    case 'publisher':
                        return item.publisher;
                    case 'year':
                        return item.year;
                    default:
                        return item[colName];
                }
            };
        } else {
            this.dataService.getAllBooks().subscribe(books => {
                this.dataSource.data = books;
                this.dataSource.sortingDataAccessor = (item, colName) => {
                    switch (colName) {
                        case 'author':
                            return item.author.lastName;
                        case 'title':
                            return item.title;
                        case 'publisher':
                            return item.publisher;
                        case 'year':
                            return item.year;
                        default:
                            return item[colName];
                    }
                };
            });

        }
    }


    openAddBookModal() {
        const book = new Book(null, null, "", "", null)
        const dialogRef = this.dialog.open(AddBookModalComponent, {
            data: [book, "Добавление книги"],
            width: "300px",
            autoFocus: false
        })
        dialogRef.afterClosed().subscribe(res => {
            if (localStorage.getItem("authors")) {
                const newId = JSON.parse(localStorage.getItem("authors")).length > 0 ? Math.max(...JSON.parse(localStorage.getItem("authors")).map(book => book.id)) + 1 : 1;
                const book: Book = {
                    ...res,
                    id: newId
                }
                console.log("afterclosed", book)
                this.dataService.postBook(book)
                this.dataSource._updateChangeSubscription()
            } else {
                const newId = Data.books.length > 0 ? Math.max(...Data.books.map(book => book.id)) + 1 : 1;
                const book: Book = {
                    ...res,
                    id: newId
                }
                this.dataService.postBook(book)
                this.dataSource._updateChangeSubscription()

            }
        })
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

}
