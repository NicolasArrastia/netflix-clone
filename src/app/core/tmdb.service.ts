import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  http = inject(HttpClient)
  apiKey = '' // WARN: Remove this apiKey from ts file, move to env file
  baseUrl = `https://api.themoviedb.org/3/movie/popular`

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}?api_key=${this.apiKey}`)
  }
}
