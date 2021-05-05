import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Country } from '../../_model/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coutryService:CountriesService
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    const id = this.activatedRoute.snapshot.paramMap.get('name');
    console.log(id);
    this.coutryService.getCountry(id).subscribe((data:any) => {
      console.log(data);
      this.country = data[0];
    });
  }

}
