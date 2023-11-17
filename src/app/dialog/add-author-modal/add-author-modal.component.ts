import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Author} from "../../models/author";

@Component({
    selector: 'app-add-author-modal',
    templateUrl: './add-author-modal.component.html',
    styleUrls: ['./add-author-modal.component.scss']
})
export class AddAuthorModalComponent implements OnInit {


    constructor(@Inject(MAT_DIALOG_DATA) private data: [Author, string], private dialogRef: MatDialogRef<AddAuthorModalComponent>) {
    }

    author: Author

    dialogTitle: string
    tmpFirstName: string
    tmpLastName: string
    tmpMiddleName: string
    tmpDateOfBirth: Date

    saveAuthor() {

    }

    ngOnInit() {
        this.author = this.data[0]
        this.dialogTitle = this.data[1]
    }

    onCancel() {
        this.dialogRef.close(null)
    }

    onConfirm() {
        this.author.firstName = this.tmpFirstName
        this.author.lastName = this.tmpLastName
        this.author.middleName = this.tmpMiddleName
        this.author.dateOfBirth = this.tmpDateOfBirth

        this.dialogRef.close(this.author)

    }
}
