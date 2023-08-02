import { CityService } from './cities.service';
import { Component } from '@angular/core';
import { City } from './city.model';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent {
  cities: City[] = new Array<City>();

  constructor(private cityService: CityService) {}

  ngOnInit() {
    var result = this.cityService.getAll();
    result.forEach((cities: any) => {
      cities.forEach((city: any) => {
        this.cities.push(city);
      });
    });
  }
}
