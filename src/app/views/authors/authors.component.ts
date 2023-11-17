import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddAuthorModalComponent} from "../../dialog/add-author-modal/add-author-modal.component";
import {Author} from "../../models/author";
import {MatTableDataSource} from "@angular/material/table";
import {Data} from "../../dataSet/data";
import {DataService} from "../../service/data.service";
import {MatSort} from "@angular/material/sort";

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
    @ViewChild(MatSort, {static: false}) private sort: MatSort;


    public openAddAuthorModal() {
        const author = new Author(null, "", "", "", null)
        const dialogRef = this.dialog.open(AddAuthorModalComponent, {
                data: [author, "Добавление автора"],
                width: "300px",
                autoFocus: false
            }
        );
        dialogRef.afterClosed().subscribe(res => {
            const newId = Data.authors.length > 0 ? Math.max(...Data.authors.map(author => author.id)) + 1 : 1;
            const newAuthor: Author = {
                ...res,
                id: newId
            }
            this.dataService.postItem(newAuthor)
            this.dataSource._updateChangeSubscription()
        })
    }

    ngOnInit() {
        this.dataSource = new MatTableDataSource()
        localStorage.getItem("authors")
        this.dataService.getAllAuthors().subscribe(auths => {
            this.dataSource.data = auths
        })

    }
}
