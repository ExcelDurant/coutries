import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  countries_api = 'http://restcountries.eu/rest/v2';
  data_api = "http://localhost:8000/data";

  constructor(private http: HttpClient) { }

  getCountries() {
    /**
   * 
   * @returns
   */
    return this.http.get(this.countries_api+"/all");
  }

  getCountry(name:any) {
    return this.http.get(this.countries_api+"/name/"+name);
  }

  getData():Observable<any> {
    return this.http.get(this.data_api);
  }

}
