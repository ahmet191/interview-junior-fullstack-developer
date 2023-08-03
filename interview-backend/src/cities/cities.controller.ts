import { url } from 'inspector';
import { CitiesService } from './cities.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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

  @Get('getbyname/:name')
  getCitiesByName(@Param() params: { name: string }) {
    if (params.name == '') {
      const cities = this._citiesService.getCities();
      return cities;
    }
    const cities = this._citiesService.filterCitiesByName(params.name);
    return cities;
  }

  @Get('getbycount/:count')
  getCitiesByCount(@Param() params: { count: number }) {
    if (params.count.toString() == '' || params.count == 0) {
      const cities = this._citiesService.getCities();
      return cities;
    }
    const cities = this._citiesService.filterCitiesByCount(params.count);
    return cities;
  }
}
