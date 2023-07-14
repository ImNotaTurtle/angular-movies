import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResult, Movie } from '../interfaces/movie.interface';

@Injectable({providedIn: 'root'})
export class MovieService {
    movieData:Movie[] = [];

    constructor(private http: HttpClient) { }

    movieDataUpdated: EventEmitter<Movie[]> = new EventEmitter<Movie[]>;

    SearchByTag(inputTag:string): Movie[] {
        const params = new HttpParams()
            .set('apikey', 'f1ac3a83')
            .set('s',inputTag)
        
        this.http.get<SearchResult>(`http://www.omdbapi.com/?`, { params })
            .subscribe( resp => { 
                this.movieData =  resp.Search
                this.movieDataUpdated.emit(this.movieData);
                console.log(this.movieData);
                }
            )
            return this.movieData;
    }
    
}