'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const values = {};
  const keys = [];

  collectionA.forEach(item => {
    if (keys.includes(item)) {
      values[item] = values[item] + 1;
    } else {
      keys.push(item);
      values[item] = 1;
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
