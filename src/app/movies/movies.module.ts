import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesComponent } from './movies.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    MoviesComponent,
    SearchComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MoviesComponent,
    SearchComponent,
    ContentComponent
  ]
})
export class MoviesModule { }
