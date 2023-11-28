import { Injectable } from '@angular/core';

export class Employee {
  id!: number;

  firstName!: string;

  lastName!: string;

  gender!: string;

  birthDate!: Date;
}

const employees: Employee[] = [];

const surnames: string[] = [
  'Smith',
  'Johnson',
  'Brown',
  'Taylor',
  'Anderson',
  'Harris',
  'Clark',
  'Allen',
  'Scott',
  'Carter'];

const names: string[] = [
  'James',
  'John',
  'Robert',
  'Christopher',
  'George',
  'Mary',
  'Nancy',
  'Sandra',
  'Michelle',
  'Betty'];

const gender: string[] = ['Male', 'Female'];

const positions: string[] = ["Trainee", "Junior", "Middle", "Senior"];

let s = 123456789;

@Injectable()
export class Service {
  random() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  }

  randomName() {
    s = (2103515245 * s + 12345) % 2147483647;
    return s % (10 - 1);
  }

  posRandom() {
    s = (1103515245 * s + 12345) % 2147483647;
    return s % (4 - 1);
  };

  generateData(count: number) {
    let i: number;
    const startBirthDate = Date.parse('1/1/1975');
    const endBirthDate = Date.parse('1/1/1992');

    const empStartDate = Date.parse('1/1/2018');
    const empEndDate = Date.now();

    for (i = 0; i < count; i++) {
      const birthDate = new Date(startBirthDate + Math.floor(
        this.random()
                    * (endBirthDate - startBirthDate) / 10,
      ));
      birthDate.setHours(12);

      const emplDate = new Date(empStartDate + Math.floor(
        (this.random() * (empEndDate - empStartDate)) / 10,
      ));
      emplDate.setHours(12);

      const nameIndex = this.random();
      const supIndex = this.randomName();
      const item = {
        id: i + 1,
        firstName: names[nameIndex],
        lastName: surnames[this.random()],
        gender: gender[Math.floor(nameIndex / 5)],
        birthDate,
        supervisor: names[supIndex],
        position: positions[this.posRandom()],
        startedDate: emplDate
      };
      employees.push(item);
    }

    return employees;
  }
}
