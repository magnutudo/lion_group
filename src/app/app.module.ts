import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthorsComponent} from './views/authors/authors.component';
import {BooksComponent} from './views/books/books.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {AddAuthorModalComponent} from './dialog/add-author-modal/add-author-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {DataService} from "./service/data.service";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {matDatepickerAnimations, MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    declarations: [
        AppComponent,
        AuthorsComponent,
        BooksComponent,
        AddAuthorModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        FormsModule,
        MatInputModule,
        MatTableModule,
        MatSortModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
