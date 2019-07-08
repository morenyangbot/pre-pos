'use strict';

function countSameElements(collection) {
  const result = {};
  const keys = [];
  collection.forEach(item => {
    console.log(result)
    if (!item.includes('-')) {
      !keys.includes(item) && keys.push(item);
      result[item] = result[item] ? result[item] + 1 : 1;
    } else {
      const [key, value] = item.split("-");
      !keys.includes(key) && keys.push(key);
      result[key] = result[key] ? result[key] + parseInt(value) : parseInt(value);
    }
  });
  return keys.map(item => ({ key: item, count: result[item] }));

}
