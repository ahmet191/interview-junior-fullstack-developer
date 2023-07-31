import { Injectable } from '@nestjs/common';
import { City } from './cities.model';
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from 'fs/promises';

async function readJsonFile(path) {
  const file = await readFile(path, 'utf8');
  return JSON.parse(file);
}

async function writeToFile(path, data) {
  await writeFile(path, data);
}

@Injectable()
export class CitiesService {
  private cities: City[] = [];
  constructor() {
    readJsonFile('./cities.json').then((data) => {
      this.cities = [...data];
    });
  }

  async addCity(cityName: string, count: number) {
    const newId = uuidv4();
    const newCity = new City(newId, cityName, count);
    this.cities.push(newCity);
    await writeToFile('./cities.json', JSON.stringify(this.cities));
    return newId;
  }

  async deleteCity(uuid: string) {
    const startCount = this.cities.length;
    this.cities = this.cities.filter(
      (x) => x.uuid != uuid,
    ) as unknown as City[];
    const endCount = this.cities.length;
    if (startCount > endCount) {
      await writeToFile('./cities.json', JSON.stringify(this.cities));
      return true;
    }
    return false;
  }

  filterCitiesByName(name) {
    const cities = this.cities.filter((x) => x.cityName == name);
    return cities;
  }

  filterCitiesByCount(count) {
    const cities = this.cities.filter((x) => x.count == count);
    return cities;
  }

  getCities() {
    const cities = this.cities;
    return cities;
  }
}
