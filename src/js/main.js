const films = {
  crime: ["Побег из Шоушенка"],
  drama: ["Зеленая миля", "Форест Гамп", "Список Шиндлера"],
  comedy: ["1+1"]
};

const user = {
  fistName: "Oleg",
  surName: 'Ivanov',
  age: 24,
};

const getObjectKeys = (obj) => {
  let keys = new Array;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
};

const getObjectValues = (obj) => {
  let values = new Array;
  for (const value in obj) {
    if (obj.hasOwnProperty(value)) {
      values.push(obj[value]); 
    }
  }
  return values;
};

const getObjectEntries = (obj) => {
  const keys = getObjectKeys(obj);
  let objEntries = new Array;
  for (let i = keys.length - 1; i >= 0; i--) {
    objEntries[i] = [keys[i], obj[keys[i]]]
  }
  return objEntries;
};

// console.log(getObjectValues(films));
// console.log(Object.values(films));
// console.log(getObjectKeys(films));
// console.log(Object.keys(films));
// console.log(getObjectEntries(user));
// console.log(Object.entries(user));
