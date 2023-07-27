import { CitiesService } from './cities.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('city')
export class CitiesController {
  constructor(private readonly _citiesService: CitiesService) {}
  @Get('/index')
  getCities() {
    return this._citiesService.getCities();
  }
  @Post('addcity')
  addCity(@Body('cityName') cityName: string, @Body('count') count: number) {
    const newId = this._citiesService.addCity(cityName, count);
    return { id: newId };
  }
}
