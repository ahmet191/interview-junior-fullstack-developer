import { CitiesService } from './cities.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('city')
export class CitiesController {
  constructor(private readonly _citiesService: CitiesService) {}
  @Get('/getcities')
  getCities() {
    return this._citiesService.getCities();
  }
  @Post('addcity')
  addCity(@Body('cityName') cityName: string, @Body('count') count: number) {
    const newId = this._citiesService.addCity(cityName, count);
    return { id: newId };
  }

  @Post('deletecity')
  deleteCity(@Body('uuid') uuid: string) {
    const result = this._citiesService.deleteCity(uuid);
    return result;
  }

  @Get('getbyname')
  getCitiesByName(@Body('cityName') cityName: string) {
    const cities = this._citiesService.filterCitiesByName(cityName);
    return cities;
  }

  @Get('getbycount')
  getCitiesByCount(@Body('count') count: string) {
    const cities = this._citiesService.filterCitiesByCount(count);
    return cities;
  }
}
