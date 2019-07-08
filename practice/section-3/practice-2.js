'use strict';

function createUpdatedCollection(collectionA, objectB) {
  const { value: values } = objectB;
  collectionA.forEach(item => {
    if (values.includes(item.key)) {
      item.count = item.count - parseInt(item.count / 3);
    }
  });
  return collectionA;
}
