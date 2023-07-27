import { Injectable, StreamableFile } from '@nestjs/common';
import { City } from './cities.model';
import { v4 as uuidv4 } from 'uuid';
import Cities from '../data/cities.json';
import { join } from 'path';
import { createReadStream } from 'fs';

@Injectable()
export class CitiesService {
  private file = new StreamableFile(
    createReadStream(join(process.cwd(), 'package.json')),
  );
  private cities: City[] = [];

  addCity(cityName: string, count: number) {
    const newId = uuidv4();
    const newCity = new City(newId, cityName, count);
    this.cities.push(newCity);
    return newId;
  }

  getCities() {
    const cities = this.cities;
    return cities;
  }
}
