'use strict';

function collectSameElements(collectionA, collectionB) {
  const flattenB = collectionB.flat()
  return collectionA.filter(item => flattenB.includes(item));
}
