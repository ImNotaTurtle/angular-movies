import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movies-content',
  templateUrl: './content.component.html'
})
export class ContentComponent {
  @Input() movieData:Movie[] = [];

}
