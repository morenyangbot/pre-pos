'use strict';

function countSameElements(collection) {
  const result = {};
  collection.forEach(item => {
    result[item] = result[item] ? result[item] + 1 : 1;
  });
  const keys = Array.from(new Set(collection))
  return keys.map(item => ({ key: item, count: result[item] }));
}
