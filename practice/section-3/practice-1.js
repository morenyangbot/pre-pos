'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value: values } = objectB;
  collectionA.forEach(item => {
    if (values.includes(item.key)) {
      item.count = item.count - 1;
    }
  });
  return collectionA;
}
