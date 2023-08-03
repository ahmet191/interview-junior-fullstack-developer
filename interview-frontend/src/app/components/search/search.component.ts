import { Page } from './../../../../node_modules/ngx-pagination/lib/pagination-controls.directive.d';
import { AfterViewInit, Component, ElementRef, Inject } from '@angular/core';
import { City } from '../cities/city.model';
import { CityService } from '../cities/cities.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  cities: City[] = new Array<City>();

  constructor(
    private cityService: CityService,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) document: Document
  ) {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement
      .querySelector('#cityName-field')
      .addEventListener('keyup', function (e: any) {
        if (e.target.value != '') {
          document
            .getElementById('cityCount-field')!
            .setAttribute('disabled', 'false');
        } else {
          document
            .getElementById('cityCount-field')!
            .removeAttribute('disabled');
        }
      });
    this.elementRef.nativeElement
      .querySelector('#cityCount-field')
      .addEventListener('keyup', function (e: any) {
        if (e.target.value != '') {
          document
            .getElementById('cityName-field')!
            .setAttribute('disabled', 'false');
        } else {
          document
            .getElementById('cityName-field')!
            .removeAttribute('disabled');
        }
      });
  }

  ngOnInit() {
    var result = this.cityService.getAll();
    this.cities = new Array<City>();
    result.forEach((cities: any) => {
      cities.forEach((city: any) => {
        this.cities.push(city);
      });
    });
  }

  searchCities(data: any) {
    var result;
    if (data.cityName != '') {
      result = this.cityService.getByName(data.cityName);
    } else if (data.cityCount != '') {
      result = this.cityService.getByCount(data.cityCount);
    } else {
      result = this.cityService.getAll();
    }

    this.cities = new Array<City>();
    result.forEach((cities: any) => {
      cities.forEach((city: any) => {
        this.cities.push(city);
      });
    });
  }
}
