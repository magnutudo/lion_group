import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsComponent} from "./views/authors/authors.component";
import {BooksComponent} from "./views/books/books.component";

const routes: Routes = [
  {path: 'authors', component: AuthorsComponent},
  {path: "", redirectTo: "authors", pathMatch: "full"},
  {path: 'books', component: BooksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
