'use strict';

function countSameElements(collection) {
  const result = {};
  const keys = [];
  const pushItem = (key, value) => {
    !keys.includes(key) && keys.push(key);
    result[key] = result[key] ? result[key] + parseInt(value) : parseInt(value);
  };
  const splitKeys = ['-', ':', '['];
  const matchSplitKey = str => {
    const matchKeys = splitKeys.filter(item => str.includes(item));
    return matchKeys.length > 0 ? matchKeys[0] : undefined;
  };
  collection.forEach(item => {
    const matchKey = matchSplitKey(item);
    if (!matchKey) {
      pushItem(item, 1);
    } else {
      const [key, value] = item.split(matchKey);
      pushItem(key, value);
    }
  });
  return keys.map(item => ({ name: item, summary: result[item] }));
}
