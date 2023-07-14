import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { MovieService } from '../../service/movies.service';

@Component({
  selector: 'movies-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private movieService:MovieService){ }

  SearchTag(inputTag:string): void{
    this.movieService.SearchByTag(inputTag);
  }

}
