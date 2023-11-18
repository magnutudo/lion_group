import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Author} from "../../models/author";
import {Book} from "../../models/book";
import {Data} from "../../dataSet/data";

@Component({
    selector: 'app-add-book-modal',
    templateUrl: './add-book-modal.component.html',
    styleUrls: ['./add-book-modal.component.scss']
})
export class AddBookModalComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: [Book, string], private dialogRef: MatDialogRef<AddBookModalComponent>) {
    }

    book: Book
    authors: Author[]
    dialogTitle: string
    tmpAuthor: Author
    tmpTitle: string
    tmpPublisher: string
    tmpYear: number

    ngOnInit() {
        this.book = this.data[0]
        this.dialogTitle = this.data[1]
        this.getAuthors();


    }

    getAuthors(): boolean {
        if (localStorage.getItem("authors")) {
            this.authors = JSON.parse(localStorage.getItem("authors"))
            return true

        } else {
            this.authors = Data.authors
            return false

        }
    }

    onConfirm() {
        this.book.author = this.tmpAuthor
        this.book.title = this.tmpTitle
        this.book.publisher = this.tmpPublisher
        this.book.year = this.tmpYear
        console.log(this.book)
        this.dialogRef.close(this.book)
    }

    onCancel() {
        this.dialogRef.close(null)
    }
}
