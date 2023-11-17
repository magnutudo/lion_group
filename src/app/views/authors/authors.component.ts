import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddAuthorModalComponent} from "../../dialog/add-author-modal/add-author-modal.component";
import {Author} from "../../models/author";
import {MatTableDataSource} from "@angular/material/table";
import {Data} from "../../dataSet/data";
import {DataService} from "../../service/data.service";

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
    dataSource: MatTableDataSource<Author>;

    constructor(private dialog: MatDialog, private dataService: DataService) {
    }

    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'middleName', 'dateOfBirth']
    authors: Author[];


    public openAddAuthorModal() {
        const dialogRef = this.dialog.open(AddAuthorModalComponent, {
                width: "300px",
                autoFocus: false
            },
        )
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource()
        this.dataService.getAllAuthors().subscribe(auths => {
            this.dataSource.data = auths
        })
    }
}
