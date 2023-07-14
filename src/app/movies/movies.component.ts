import { Component, OnInit } from '@angular/core';
import { MovieService } from './service/movies.service';
import { Movie } from './interfaces/movie.interface';


@Component({
  selector: 'home-movies',
  templateUrl: './movies.component.html'
})

export class MoviesComponent implements OnInit{
  movieData:Movie[] = [];

  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.movieService.movieDataUpdated.subscribe(
      ( movieEventData: Movie[] ) => { this.movieData = movieEventData}
    )
  }

}
