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
  mockDbPath: string;
  private cities: City[] = [];
  constructor() {
    this.mockDbPath = './cities.json';
    readJsonFile(this.mockDbPath).then((data) => {
      this.cities = [...data];
    });
  }

  async addCity(cityName: string, count: number) {
    const newId = uuidv4();
    const newCity = new City(newId, cityName, count);
    this.cities.push(newCity);
    await writeToFile(this.mockDbPath, JSON.stringify(this.cities));
    return newId;
  }

  async deleteCity(uuid: string) {
    const startCount = this.cities.length;
    this.cities = this.cities.filter(
      (x) => x.uuid != uuid,
    ) as unknown as City[];
    const endCount = this.cities.length;
    if (startCount > endCount) {
      await writeToFile(this.mockDbPath, JSON.stringify(this.cities));
      return true;
    }
    return false;
  }

  filterCitiesByName(name) {
    const cities = this.cities.filter((x) =>
      x.cityName.toLowerCase().includes(name),
    );
    return cities;
  }

  filterCitiesByCount(count) {
    const cities = this.cities.filter((x) =>
      x.count.toString().includes(count),
    );
    return cities;
  }

  getCities() {
    const cities = this.cities;
    return cities;
  }
}
