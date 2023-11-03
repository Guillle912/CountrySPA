import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl: string = 'https://restcountries.com/v3.1'

  http = inject(HttpClient)
  constructor() { }

  searchCapital( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
          .pipe(
            catchError(error => of([]))
          )
  }
}
