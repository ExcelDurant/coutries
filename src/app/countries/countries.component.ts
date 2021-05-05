import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { Country } from '../_model/country';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries:Country[] | undefined;
  myName = [1,2,3,4,5];
  Numb = [1,2,3,4,5,8,13];
  tfm:Observable<any> = from(this.Numb);
  getName:Observable<number[]> = of(this.myName);
  myNumbers = of(1,2,3,4,5,6).pipe(map(n => n * n));

  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    // this.getCountries();
    // console.log(this.getName);
    // this.getName.pipe(map(x => x + 2)).subscribe((data) => {
    //   console.log(data);
    // })
    this.myNumbers.subscribe(x => console.log(x));
    this.tfm.pipe(map((x) => {
      return x*x;
    })).subscribe((data) => {
      console.log(data);
    });

    this.getData();
  }

  // getCountries() {
  //   this.countriesService.getCountries().subscribe((data:any) => {
  //     console.log(data);
  //     this.countries = data;
  //   });
  // }

  getData() {
    this.countriesService.getData().pipe(map((x) => {
      return x
    })
    ).subscribe((x) => {
      console.log(x);
    })
  }

}
