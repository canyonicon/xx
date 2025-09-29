
import faker from 'faker';

const colourOptions = [
    { value: '1', label: faker.name.findName()},
    { value: '2', label: faker.name.findName()},
    { value: '3', label: faker.name.findName()},
    { value: '4', label: faker.name.findName()},
    { value: '5', label: faker.name.findName()},
    { value: '6', label: faker.name.findName()},
    { value: '7', label: faker.name.findName()},
    { value: '8', label: faker.name.findName()},
    { value: '9', label: faker.name.findName()},
    { value: '10', label: "test"},
  ];

// Array 2
const array2 = ['a', 'b', 'c'];

// Exporting multiple arrays
export { colourOptions, array2 };
