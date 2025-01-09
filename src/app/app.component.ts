import { Component, computed, inject, OnInit } from '@angular/core';
import { TmdbService } from './core/tmdb.service';
import { Movie } from './shared/models/movie.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = "netflix-clone"
  NAVIGATION_OPTIONS: { label: string }[] = [
    { label: "Home" },
    { label: "TV Shows" },
    { label: "Movies" },
    { label: "New & Popular" },
    { label: "My List" },
    { label: "Browse by Languages" },
  ]

  tmdbService = inject(TmdbService)
  movies: Movie[] = []
  mostPopularMovie = computed(() => this.movies[0] || null)

  ngOnInit(): void {
    this.tmdbService.getPopularMovies().subscribe(data => this.movies = data)
  }
}
