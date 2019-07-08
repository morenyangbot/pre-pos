'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const values = {};
  const keys = [];

  collectionA.forEach(item => {
    let key = item,
      value = 1;
    if (item.includes('-')) {
      let _value;
      [key, _value] = item.split('-');
      value = parseInt(_value);
    }
    if (keys.includes(key)) {
      values[key] = values[key] + value;
    } else {
      keys.push(key);
      values[key] = value;
    }
  });

  const { value: targetVlues } = objectB;
  Object.keys(values).forEach(key => {
    if (targetVlues.includes(key)) {
      values[key] = values[key] - parseInt(values[key] / 3);
    }
  });

  return keys.map(key => ({ key: key, count: values[key] }));
}
