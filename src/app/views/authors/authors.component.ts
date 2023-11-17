import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddAuthorModalComponent} from "../../dialog/add-author-modal/add-author-modal.component";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
  constructor(private dialog: MatDialog) {
  }

  public openAddAuthorModal() {
    const dialogRef = this.dialog.open(AddAuthorModalComponent, {
      width: "300px",
    })
  }
}
