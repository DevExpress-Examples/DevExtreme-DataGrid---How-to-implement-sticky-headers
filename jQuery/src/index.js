$(() => {
  $('#gridContainer').dxDataGrid({
    dataSource: generateData(100),
    keyExpr: 'id',
    showBorders: true,
    columnWidth: 100,
    selection: {
      mode: "multiple"
    },
    columns: [
      {
        dataField: "firstName",
        fixed: true,
        width: 80,
        fixedPosition: "left"
      },
      'lastName',
      'supervisor',
      'startedDate',
      'position',
      {
        dataField: "gender",
        fixed: true,
        width: 80,
        fixedPosition: "right"
      },
      'birthDate'
    ],
    loadPanel: {
      enabled: true,
    },
    scrolling: {
      mode: 'virtual',
    },
    sorting: {
      mode: 'none',
    },
    onContentReady(e) {
      e.component.option('loadPanel.enabled', false);
    },
  });
});

let s = 123456789;
const random = function () {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
};

const posRandom = function () {
  s = (1103515245 * s + 12345) % 2147483647;
  return s % (4 - 1);
};

const randomName = function() {
  s = (2103515245 * s + 12345) % 2147483647;
  return s % (10 - 1);
};

const generateData = function (count) {
  let i;
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const gender = ['Male', 'Female'];
  const positions = ["Trainee", "Junior", "Middle", "Senior"];
  const items = [];
  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');
  
  const empStartDate = Date.parse('1/1/2018');
  const empEndDate = Date.now();

  for (i = 0; i < count; i += 1) {
    const birthDate = new Date(startBirthDate + Math.floor(
      (random() * (endBirthDate - startBirthDate)) / 10,
    ));
    birthDate.setHours(12);
    
    const emplDate = new Date(empStartDate + Math.floor(
      (random() * (empEndDate - empStartDate)) / 10,
    ));
    emplDate.setHours(12);

    const nameIndex = random();
    const supIndex = randomName();
    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[random()],
      supervisor: names[supIndex],
      position: positions[posRandom()],
      gender: gender[Math.floor(nameIndex / 5)],
      birthDate,
      startedDate: emplDate
    };
    items.push(item);
  }
  return items;
};
