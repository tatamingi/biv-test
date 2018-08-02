import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable, of } from 'rxjs/index';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _configUrl = '/assets/countries.json';

  constructor(private http: HttpClient) { }

  public getData(): Observable<Country[]> {
    return this.http.get<Country[]>(this._configUrl)
      .pipe(
        catchError(this.handleError('getCountries', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
