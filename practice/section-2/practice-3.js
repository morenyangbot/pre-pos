'use strict';

function countSameElements(collection) {
  const result = {};
  const keys = [];
  const pushItem = (key, value) => {
    if (!keys.includes(key)) {
      keys.push(key);
      result[key] = parseInt(value);
    } else {
      result[key] = result[key] + parseInt(value);
    }
  };
  const splitKeys = ['-', ':', '['];
  const matchSplitKey = str => {
    const matchKeys = splitKeys.filter(item => str.includes(item));
    return matchKeys[0]
  };
  collection.forEach(item => {
    const matchKey = matchSplitKey(item);
    if (!matchKey) {
      pushItem(item, 1);
    } else {
      pushItem(...item.split(matchKey));
    }
  });
  return keys.map(item => ({ name: item, summary: result[item] }));
}
