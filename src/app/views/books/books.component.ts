import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

import {Books} from "../../models/books";
import {MatDialog} from "@angular/material/dialog";
import {DataService} from "../../service/data.service";
import {MatSort} from "@angular/material/sort";


@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {
    dataSource: MatTableDataSource<Books>;
    displayedColumns: string[] = ['id', 'author', 'title', 'publisher', 'year']

    constructor(private dialog: MatDialog, private dataService: DataService) {
    }

    books: Books[]
    @ViewChild(MatSort, {static: false}) private sort: MatSort;

    ngOnInit() {
        this.dataSource = new MatTableDataSource()
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


    openAddBookModal() {

    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }

}
