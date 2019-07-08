'use strict';

function collectSameElements(collectionA, objectB) {
  const keysA = collectionA.map(item => item.key);
  return keysA.filter(item => objectB.value.includes(item));
}
