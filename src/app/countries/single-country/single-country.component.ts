import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.scss']
})
export class SingleCountryComponent implements OnInit {

  @Input() country:any;

  constructor() { }

  ngOnInit(): void {
  }

}


