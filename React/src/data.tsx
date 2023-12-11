export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  supervisor: string;
  position: string;
  startedDate: Date;
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

const positions: string[] = ['Trainee', 'Junior', 'Middle', 'Senior'];

let s = 123456789;

function random(): number {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
}

function randomName(): number {
  s = (2103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
}

function posRandom(): number {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (4 - 1);
}

export function generateData(count: number): Employee[] {
  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');

  const empStartDate = Date.parse('1/1/2018');
  const empEndDate = Date.now();

  for (let i = 0; i < count; i++) {
    const birthDate = new Date(startBirthDate + Math.floor(
      random() * (endBirthDate - startBirthDate) / 10,
    ));
    birthDate.setHours(12);

    const employmentDate = new Date(empStartDate + Math.floor(
      (random() * (empEndDate - empStartDate)) / 10,
    ));
    employmentDate.setHours(12);

    const nameIndex = random();
    const supIndex = randomName();
    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      gender: gender[Math.floor(nameIndex / 5)],
      birthDate,
      supervisor: names[supIndex],
      position: positions[posRandom()],
      startedDate: employmentDate,
    };
    employees.push(item);
  }

  return employees;
}
